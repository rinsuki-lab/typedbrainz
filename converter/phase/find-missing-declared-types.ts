// SPDX-License-Identifier: MIT
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { createProgram, getPreEmitDiagnostics, parseJsonConfigFileContent, readConfigFile, sys } from "typescript";
import { ConverterContext } from "../context.js";

const MESSAGE_TEXT = /^Cannot find name '([^']+)'\.$/

export function doFindMissingDeclaredTypes(ctx: ConverterContext) {
    const { config } = readConfigFile("tsconfig.json", sys.readFile)
    const { options, fileNames } = parseJsonConfigFileContent(config, sys, process.cwd())
    console.log(fileNames)
    const allowedFileNames = join(process.cwd(), "generated")
    const filteredFileNames = fileNames.filter(x => x.startsWith(allowedFileNames))
    console.log(filteredFileNames)
    const program = createProgram({
        options,
        rootNames: filteredFileNames,
    })
    const emitResult = program.emit(undefined, () => {})
    const diagnostics = getPreEmitDiagnostics(program).concat(emitResult.diagnostics)

    const alreadyImported = new Map<string, Set<string>>()

    for (const diagnostic of diagnostics) {
        if (typeof diagnostic.messageText !== "string") {
            continue
        }
        const matched = MESSAGE_TEXT.exec(diagnostic.messageText)
        if (matched == null) continue
        const name = matched[1]
        if (!ctx.typeNameToDeclaredFilePath.has(name)) continue
        let alreadyImportedSet = alreadyImported.get(diagnostic.file!.fileName)
        if (alreadyImportedSet == null) {
            alreadyImportedSet = new Set<string>()
            alreadyImported.set(diagnostic.file!.fileName, alreadyImportedSet)
        }
        if (alreadyImportedSet.has(name)) continue
        alreadyImportedSet.add(name)
        const importPath = relative(
            dirname(diagnostic.file!.fileName),
            join(process.cwd(), "generated", "declared-types.js")
        )
        console.log(name, importPath)
        const file = diagnostic.file!.fileName
        const src = readFileSync(file, "utf-8");
        const part = src.includes("\nimport ") ? "\nimport " : "\nexport "
        const dst = src.replace(part, `\nimport { ${name} } from ${JSON.stringify(importPath)}${part}`)
        writeFileSync(file, dst, "utf-8");
    }
}
