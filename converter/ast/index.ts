import { factory, Statement } from "typescript"
import { convertImportDeclaration } from "./import"
import assert from "node:assert"
import { convertTypeAlias } from "./type-alias"
import { convertVariableDeclaration } from "./var-decl"

export function convertAST(body: any): readonly Statement[] {
    switch (body.type) {
    case "ImportDeclaration": {
        return [convertImportDeclaration(body)]
    }
    case "ExportNamedDeclaration": {
        assert(body.specifiers.length === 0)
        switch (body.declaration.type) {
        case "TypeAlias":
            return [convertTypeAlias(body.declaration, "export")]
        case "VariableDeclaration":
            return [convertVariableDeclaration(body.declaration, "export")]
        default:
            return [factory.createExpressionStatement(
                factory.createStringLiteral("Unknown Export Type: " + body.declaration.type)
            )]
        }
    }
    default:
        // console.log(JSON.stringify(body, null, 4))
        return [factory.createExpressionStatement(
            factory.createStringLiteral("Unknown Type: " + body.type)
        )]
    }
}
