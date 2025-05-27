import assert from "node:assert";
import { factory, NodeFlags, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier";
import { convertExpression } from "./expr";
import { convertTypeAnnotation } from "./type-annot";

export function convertVariableDeclaration(source: any, flag?: "export") {
    return factory.createVariableStatement(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : undefined,
        factory.createVariableDeclarationList(
            (source.declarations as any[]).map(decl => {
                assert(decl.type == "VariableDeclarator")
                return factory.createVariableDeclaration(
                    convertIdentifier(decl.id),
                    undefined,
                    convertTypeAnnotation(decl.id.typeAnnotation?.typeAnnotation), // TODO: type annotation
                    convertExpression(decl.init),
                )
            }),
            source.kind === "const" ? NodeFlags.Const : undefined,
        )
    )
}