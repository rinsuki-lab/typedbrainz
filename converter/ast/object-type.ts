// SPDX-License-Identifier: MIT
import { factory, SyntaxKind, TypeElement, TypeNode } from "typescript";
import { convertIdentifier } from "./identifier.js";
import assert from "node:assert";
import { convertTypeNode } from "./type-node.js";
import { convertPropertyName } from "./property-name.js";

export function convertObjectType(source: any, flag?: "export"): TypeNode {
    let properties: TypeElement[] = []
    const spread: TypeNode[] = []
    for (const indexer of source.indexers) {
        assert.equal(indexer.type, "ObjectTypeIndexer")
        properties.push(factory.createIndexSignature(
            undefined,
            [factory.createParameterDeclaration(
                undefined,
                undefined,
                convertIdentifier(indexer.id),
                undefined,
                convertTypeNode(indexer.key),
                undefined,
            )],
            convertTypeNode(indexer.value),
        ))
    }
    for (const prop of source.properties) {
        switch (prop.type) {
        case "ObjectTypeProperty":
            properties.push(factory.createPropertySignature(
                undefined,
                convertPropertyName(prop.key),
                prop.optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined,
                convertTypeNode(prop.value),
            ));
            break;
        case "ObjectTypeSpreadProperty":
            if (properties.length) {
                spread.push(factory.createTypeLiteralNode(properties));
                properties = [];
            }
            spread.push(convertTypeNode(prop.argument));
            break;
        }
    }
    
    if (properties.length) {
        spread.push(factory.createTypeLiteralNode(properties));
    }

    let node = spread.pop()
    if (node == null) {
        node = factory.createTypeLiteralNode([]);
    }

    while (spread.length) {
        const next = spread.pop()
        if (next == null) break
        node = factory.createTypeReferenceNode(
            factory.createIdentifier("$_$Spread"),
            [
                next,
                node,
            ]
        )
    }

    return node
}
