import { factory, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier.js";
import { convertTypeNode } from "./type-node.js";

export function convertOpaqueType(source: any, flag?: "export") {
    return factory.createTypeAliasDeclaration(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : undefined,
        convertIdentifier(source.id),
        undefined, // TODO: type parameters
        factory.createIntersectionTypeNode([
            convertTypeNode(source.impltype),
            factory.createTypeLiteralNode([factory.createPropertySignature(
                undefined,
                factory.createIdentifier("__OpaqueType__" + source.id.name),
                undefined,
                factory.createKeywordTypeNode(SyntaxKind.NeverKeyword),
            )])
        ])
    )
}
