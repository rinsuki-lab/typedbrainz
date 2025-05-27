import assert from "node:assert"
import { factory, Statement } from "typescript"
import { convertImportDeclaration } from "./import.js"
import { convertTypeAlias } from "./type-alias.js"
import { convertVariableDeclaration } from "./var-decl.js"
import { convertOpaqueType } from "./opaque-type.js"
import { ConverterContext } from "../context.js"

export function convertAST(ctx: ConverterContext, body: any): readonly Statement[] {
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
        case "OpaqueType":
            return [convertOpaqueType(body.declaration, "export")]
        default:
            return [factory.createExpressionStatement(
                factory.createStringLiteral("Unknown Export Type: " + body.declaration.type)
            )]
        }
    }
    case "DeclareTypeAlias": {
        ctx.addDeclaredTypeName(body.id.name)
        return [convertTypeAlias(body, "export")]
    }
    default:
        // console.log(JSON.stringify(body, null, 4))
        return [factory.createExpressionStatement(
            factory.createStringLiteral("Unknown Type: " + body.type)
        )]
    }
}
