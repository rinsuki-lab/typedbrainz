// @ts-expect-error
import flow from "flow-parser"
const { parse } = flow
import assert from "node:assert"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import ts, { ImportClause, isImportDeclaration, isStringLiteral, SyntaxKind } from "typescript"
import { convertImportDeclaration } from "./ast/import"
import { convertAST } from "./ast/index"

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

const compatibilityFile = readFileSync(import.meta.dirname + "/compatibility.d.ts", "utf-8")

while (true) {
    const target = targets.pop()
    if (target == null) break
    if (alreadyParsedTargets.has(target)) continue
    alreadyParsedTargets.add(target)
    const ast = parse(readFileSync(target, "utf-8"))
    console.log(ast)
    let dest = ts.createSourceFile("", compatibilityFile, ts.ScriptTarget.ESNext)
    const statements = (ast.body as any[]).flatMap(convertAST)
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
    const printer = ts.createPrinter()
    const desttext = printer.printFile(dest)
    mkdirSync(dirname(target.replace("upstream", "generated")), { recursive: true })
    writeFileSync(target.replace("upstream", "generated").replace(/\.js$/, ".ts"), desttext)
}