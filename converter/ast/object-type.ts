import { factory, SyntaxKind, TypeElement, TypeNode } from "typescript";
import { convertIdentifier } from "./identifier.js";
import assert from "node:assert";
import { convertTypeNode } from "./type-node.js";
import { convertPropertyName } from "./property-name.js";

export function convertObjectType(source: any, flag?: "export") {
    const spread: TypeNode[] = []
    const properties: TypeElement[] = []
    for (const prop of source.properties) {
        switch (prop.type) {
        case "ObjectTypeProperty":
            properties.push(factory.createPropertySignature(
                undefined,
                convertPropertyName(prop.key),
                undefined,
                convertTypeNode(prop.value),
            ));
            break;
        case "ObjectTypeSpreadProperty":
            spread.push(convertTypeNode(prop.argument));
            break;
        }
    }
    return factory.createIntersectionTypeNode([
        ...spread,
        factory.createTypeLiteralNode(properties),
    ])
}
