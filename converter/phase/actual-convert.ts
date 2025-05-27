// @ts-expect-error
import flow from "flow-parser"
const { parse } = flow
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { ConverterContext } from "../context.js"
import { createPrinter, createSourceFile, isImportDeclaration, isStringLiteral, ScriptTarget } from "typescript"
import { convertAST } from "../ast/index.js"
import { appended } from "../utils.js"
import assert from "node:assert"
import { dirname, join } from "node:path"

export function doActualConvert(ctx: ConverterContext) {
    const targets = [
        "upstream/root/static/scripts/relationship-editor/types.js",
        "upstream/root/types/url.js",
    ]

    const alreadyParsedTargets = new Set()

    const compatibilityFile = readFileSync(import.meta.dirname + "/../compatibility.d.ts", "utf-8")


    while (true) {
        const target = targets.pop()
        if (target == null) break
        if (alreadyParsedTargets.has(target)) continue
        alreadyParsedTargets.add(target)
        const ast = parse(readFileSync(target, "utf-8"))
        ctx.currentFilePath = target
        console.log(ast)
        let dest = createSourceFile("", compatibilityFile, ScriptTarget.ESNext)
        const statements = (ast.body as any[]).flatMap(ast => convertAST(ctx, ast))
        dest = appended(dest, statements.filter(x => x != null))
        for (const s of dest.statements) {
            if (isImportDeclaration(s)) {
                const module = s.moduleSpecifier
                assert(isStringLiteral(module))
                if (module.text.startsWith(".")) {
                    targets.push(join(dirname(target), module.text))
                }
            }
        }
        const printer = createPrinter()
        const desttext = printer.printFile(dest)
        mkdirSync(dirname(target.replace("upstream", "generated")), { recursive: true })
        writeFileSync(target.replace("upstream", "generated").replace(/\.js$/, ".ts"), desttext)
    }
}