import { factory } from "typescript"
import { convertImportDeclaration } from "./import"
import assert from "node:assert"
import { convertTypeAlias } from "./type-alias"

export function convertAST(body: any) {
    switch (body.type) {
    case "ImportDeclaration": {
        return [convertImportDeclaration(body)]
    }
    case "ExportNamedDeclaration": {
        assert(body.specifiers.length === 0)
        switch (body.declaration.type) {
        case "TypeAlias":
            return convertTypeAlias(body.declaration, "export")
        }
        break
    }
    default:
        // console.log(JSON.stringify(body, null, 4))
        return [factory.createExpressionStatement(
            factory.createStringLiteral("Unknown Type: " + body.type)
        )]
    }
}
