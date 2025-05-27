// @ts-expect-error
import { parse } from "flow-parser"
import assert from "node:assert"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import ts, { ImportClause } from "typescript"
import { convertImportDeclaration } from "./ast/import"

const targets = [
    "upstream/root/static/scripts/relationship-editor/types.js"
]

const alreadyParsedTargets = new Set()

function appended(source: ts.SourceFile, statements: readonly ts.Statement[]): ts.SourceFile {
    return ts.factory.updateSourceFile(source, [
        ...source.statements,
        ...statements,
    ], source.isDeclarationFile, source.referencedFiles, source.typeReferenceDirectives, source.hasNoDefaultLib)
}




while (true) {
    const target = targets.pop()
    if (target == null) break
    if (alreadyParsedTargets.has(target)) continue
    alreadyParsedTargets.add(target)
    const ast = parse(readFileSync(target, "utf-8"))
    console.log(ast)
    let dest = ts.createSourceFile("", "", ts.ScriptTarget.ESNext)
    for (const body of ast.body) {
        switch (body.type) {
        case "ImportDeclaration": {
            dest = appended(dest, [convertImportDeclaration(body)])
            if (body.source.value.startsWith(".")) {
                targets.push(join(dirname(target), body.source.value))
            }
            break
        }
        case "ExportNamedDeclaration": {
            break
        }
        default:
            // console.log(JSON.stringify(body, null, 4))
            dest = appended(dest, [ts.factory.createExpressionStatement(
                ts.factory.createStringLiteral("Unknown Type: " + body.type)
            )])
        }
    }

    const printer = ts.createPrinter()
    const desttext = printer.printFile(dest)
    mkdirSync(dirname(target.replace("upstream", "generated")), { recursive: true })
    writeFileSync(target.replace("upstream", "generated").replace(/\.js$/, ".ts"), desttext)
}