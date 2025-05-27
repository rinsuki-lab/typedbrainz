import { factory, SyntaxKind, TypeElement, TypeNode } from "typescript";
import { convertIdentifier } from "./identifier";
import assert from "node:assert";
import { convertTypeNode } from "./type-node";

export function convertObjectType(source: any, flag?: "export") {
    const spread: TypeNode[] = []
    const properties: TypeElement[] = []
    for (const prop of source.properties) {
        switch (prop.type) {
        case "ObjectTypeProperty":
            properties.push(factory.createPropertySignature(
                undefined,
                convertIdentifier(prop.key),
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