// SPDX-License-Identifier: MIT
import assert from "node:assert"
import { factory, Statement } from "typescript"
import { convertImportDeclaration } from "./import.js"
import { convertTypeAlias } from "./type-alias.js"
import { convertVariableDeclaration } from "./var-decl.js"
import { convertOpaqueType } from "./opaque-type.js"
import { ConverterContext } from "../context.js"
import { convertIdentifier } from "./identifier.js"
import { convertExpression } from "./expr.js"
import { wipLiteral } from "../wip.js"

export function convertAST(ctx: ConverterContext, body: any): readonly Statement[] {
    switch (body.type) {
    case "ImportDeclaration": {
        return [convertImportDeclaration(body)]
    }
    case "ExportDefaultDeclaration": {
        return [factory.createExportAssignment(undefined, undefined, convertExpression(body.declaration))]
    }
    case "ExportNamedDeclaration": {
        if (body.declaration == null) {
            return [factory.createExportDeclaration(
                undefined,
                false, // TODO ?
                factory.createNamedExports((body.specifiers as any[]).map((specifier) => {
                    assert.equal(specifier.type, "ExportSpecifier")
                    return factory.createExportSpecifier(
                        false, // TODO
                        convertIdentifier(specifier.local),
                        convertIdentifier(specifier.exported),
                    )
                })),
                undefined, // TODO
                undefined, // TODO
            )]
        }
        assert.equal(body.specifiers.length, 0)
        switch (body.declaration.type) {
        case "TypeAlias":
            return [convertTypeAlias(body.declaration, "export")]
        case "VariableDeclaration":
            return [convertVariableDeclaration(body.declaration, "export")]
        case "OpaqueType":
            return [convertOpaqueType(body.declaration, "export")]
        default:
            return [factory.createExpressionStatement(
                wipLiteral("convertAST_ExportNamedDeclaration", body.declaration.type)
            )]
        }
    }
    case "DeclareTypeAlias": {
        ctx.addDeclaredTypeName(body.id.name)
        return [convertTypeAlias(body, "export")]
    }
    case "TypeAlias": {
        return [convertTypeAlias(body)]
    }
    default:
        // console.log(JSON.stringify(body, null, 4))
        return [factory.createExpressionStatement(
            wipLiteral("convertAST", body.type)
        )]
    }
}
