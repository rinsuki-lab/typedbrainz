import { factory, SyntaxKind } from "typescript";
import { convertIdentifier } from "./identifier";
import assert from "node:assert";
import { convertTypeNode } from "./type-node";

export function convertObjectType(source: any, flag?: "export") {
    return factory.createTypeLiteralNode(
        source.properties.map((prop: any) => {
            assert.equal(prop.type, "ObjectTypeProperty");
            return factory.createPropertySignature(
                undefined,
                convertIdentifier(prop.key),
                undefined,
                convertTypeNode(prop.value),
            );
        })
    )
}