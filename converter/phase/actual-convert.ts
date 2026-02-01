// SPDX-License-Identifier: MIT
// @ts-expect-error
import flow from "flow-parser"
const { parse } = flow
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { ConverterContext } from "../context.js"
import { createPrinter, createSourceFile, isImportDeclaration, isStringLiteral, ScriptTarget } from "typescript"
import { convertAST } from "../ast/index.js"
import { appended } from "../utils.js"
import assert from "node:assert"
import { dirname, join, relative } from "node:path"
import { applyPatches } from "../gpl/patches.js"

export function doActualConvert(ctx: ConverterContext) {
    const originalTypeUtilsPath = "../src/type-utils.js"
    const originalTypeUtilsRealPath = join(process.cwd() + "/converter", originalTypeUtilsPath)
    const compatibilityFile = readFileSync(import.meta.dirname + "/../compatibility.d.ts", "utf-8")
    assert(compatibilityFile.includes(originalTypeUtilsPath))

    while (true) {
        const target = ctx.targets.pop()
        if (target == null) break
        try {
            if (target.endsWith("src/type-utils.js")) continue
            if (ctx.alreadyParsedTargets.has(target)) continue
            ctx.alreadyParsedTargets.add(target)
            if (!target.endsWith(".js") && !target.endsWith(".mjs")) {
                console.warn("Skipping non-JS file:", target)
                continue
            }
            const src = readFileSync(target, "utf-8")
            const ast = parse(src)
            ctx.currentFilePath = target
            // console.log(ast)
            // console.log("Converting", target)
            let dest = createSourceFile("", compatibilityFile.replace(originalTypeUtilsPath, relative(
                dirname(join(process.cwd(), target)),
                originalTypeUtilsRealPath,
            )), ScriptTarget.ESNext)
            const statements = (ast.body as any[]).flatMap(ast => {
                // console.log(src.slice(...ast.range))
                return convertAST(ctx, ast)
            })
            dest = appended(dest, statements.filter(x => x != null))
            for (const s of dest.statements) {
                if (isImportDeclaration(s)) {
                    const module = s.moduleSpecifier
                    assert(isStringLiteral(module))
                    if (module.text.startsWith(".")) {
                        ctx.targets.push(join(dirname(target), module.text))
                    }
                }
            }
            const printer = createPrinter()
            const desttext = applyPatches(printer.printFile(dest))
            mkdirSync(dirname(target.replace("upstream", "generated")), { recursive: true })
            writeFileSync(target.replace("upstream", "generated").replace(/(\.m?)js$/, "$1ts"), desttext)
        } catch (e) {
            throw new Error(`Failed to convert ${target}`, { cause: e as Error } )
        }
    }
}
