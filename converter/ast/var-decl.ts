import assert from "node:assert";
import { factory, NodeFlags, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier.js";
import { convertExpression } from "./expr.js";
import { convertTypeNode } from "./type-node.js";

export function convertVariableDeclaration(source: any, flag?: "export") {
    return factory.createVariableStatement(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : undefined,
        factory.createVariableDeclarationList(
            (source.declarations as any[]).map(decl => {
                assert(decl.type == "VariableDeclarator")
                const typeAnnot = decl.id.typeAnnotation?.typeAnnotation
                return factory.createVariableDeclaration(
                    convertIdentifier(decl.id),
                    undefined,
                    typeAnnot && convertTypeNode(typeAnnot),
                    convertExpression(decl.init),
                )
            }),
            source.kind === "const" ? NodeFlags.Const : undefined,
        )
    )
}
