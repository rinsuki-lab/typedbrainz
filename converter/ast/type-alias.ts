import { factory, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier";
import assert from "node:assert";
import { convertTypeNode } from "./type-node";

export function convertTypeAlias(source: any, flag?: "export") {
    return factory.createTypeAliasDeclaration(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : undefined,
        convertIdentifier(source.id),
        source.typeParameters == null ? undefined : (source.typeParameters.params as any[]).map(tp => {
            assert(tp.type === "TypeParameter");
            return factory.createTypeParameterDeclaration(
                undefined,
                tp.name,
                tp.bound == null ? undefined : convertTypeNode(tp.bound.typeAnnotation),
                undefined, // TODO: default type
            );
        }), // TODO: type parameters
        convertTypeNode(source.right)
    )
}