import { factory, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier";
import assert from "node:assert";
import { convertTypeNode } from "./type-node";

export function convertTypeAlias(source: any, flag?: "export") {
    return factory.createTypeAliasDeclaration(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : undefined,
        convertIdentifier(source.id),
        undefined, // TODO: type parameters
        convertTypeNode(source.right)
    )
}