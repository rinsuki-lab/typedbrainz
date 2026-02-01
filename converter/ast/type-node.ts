// SPDX-License-Identifier: MIT
import { factory, SyntaxKind, TypeNode } from "typescript";
import { convertObjectType } from "./object-type.js";
import { convertIdentifier, convertMayQualifiedTypeIdentifier } from "./identifier.js";
import { wipLiteral } from "../wip.js";
import { convertFunctionTypeParam } from "./function-type-param.js";

function convertGenericTypeAnnotation(source: any): TypeNode {
    switch (source.id.type) {
    case "QualifiedTypeIdentifier":
    case "Identifier":
        return factory.createTypeReferenceNode(
            convertMayQualifiedTypeIdentifier(source.id),
            source.typeParameters == null ? undefined : (source.typeParameters.params as any[]).map(tp => {
                return convertTypeNode(tp);
            })
        )
    default:
        return factory.createLiteralTypeNode(
            wipLiteral("convertGenericTypeAnnotation", source.id.type)
        )
    }
}

export function convertTypeNode(source: any): TypeNode {
    if (source.type === "TypeAnnotation") return convertTypeNode(source.typeAnnotation);
    switch (source.type) {
    case "UnionTypeAnnotation":
        return factory.createUnionTypeNode(source.types.map(convertTypeNode))
    case "StringLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(factory.createStringLiteral(source.value))
    case "NumberLiteralTypeAnnotation":
        if (source.value < 0) {
            return factory.createLiteralTypeNode(factory.createPrefixUnaryExpression(SyntaxKind.MinusToken, factory.createNumericLiteral(Math.abs(source.value))))
        } else {
            return factory.createLiteralTypeNode(factory.createNumericLiteral(source.value))
        }
    case "BooleanLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(source.value ? factory.createTrue() : factory.createFalse())
    case "NumberTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword)
    case "StringTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.StringKeyword)
    case "BooleanTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword)
    case "NullLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(factory.createNull())
    case "VoidTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.VoidKeyword)
    case "ObjectTypeAnnotation":
        return convertObjectType(source, "export")
    case "GenericTypeAnnotation":
        return convertGenericTypeAnnotation(source)
    case "NullableTypeAnnotation":
        return factory.createUnionTypeNode([
            convertTypeNode(source.typeAnnotation),
            factory.createLiteralTypeNode(factory.createNull()),
            factory.createKeywordTypeNode(SyntaxKind.UndefinedKeyword),
        ]);
    case "IndexedAccessType":
        return factory.createIndexedAccessTypeNode(
            convertTypeNode(source.objectType),
            convertTypeNode(source.indexType)
        )
    case "TupleTypeAnnotation":
        return factory.createTupleTypeNode(source.elementTypes.map(convertTypeNode));
    case "FunctionTypeAnnotation":
        return factory.createFunctionTypeNode(
            undefined, // TODO
            source.params.map(convertFunctionTypeParam),
            convertTypeNode(source.returnType)
        )
    case "MixedTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword);
    default:
        return factory.createLiteralTypeNode(wipLiteral("convertTypeNode", source.type));
    }
}
