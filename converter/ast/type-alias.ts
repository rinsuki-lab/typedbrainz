// SPDX-License-Identifier: MIT
import { factory, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier.js";
import assert from "node:assert";
import { convertTypeNode } from "./type-node.js";
import { convertTypeParameter } from "./type-parameter.js";

export function convertTypeAlias(source: any, flag?: "export") {
    return factory.createTypeAliasDeclaration(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : undefined,
        convertIdentifier(source.id),
        source.typeParameters == null ? undefined : (source.typeParameters.params as any[]).map(tp => {
            assert(tp.type === "TypeParameter");
            return convertTypeParameter(tp);
        }), // TODO: type parameters
        convertTypeNode(source.right)
    )
}
