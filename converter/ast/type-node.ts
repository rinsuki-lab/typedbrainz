import { factory, SyntaxKind } from "typescript";
import { convertObjectType } from "./object-type";
import { convertIdentifier } from "./identifier";

function convertGenericTypeAnnotation(source: any){
    switch (source.id.type) {
    case "Identifier":
        return factory.createTypeReferenceNode(
            convertIdentifier(source.id)
        )
    default:
        return factory.createLiteralTypeNode(
            factory.createStringLiteral(`Unknown Generic Type Annotaton Type: ${source.id.type}`)
        )
    }
}

export function convertTypeNode(source: any) {
    switch (source.type) {
    case "UnionTypeAnnotation":
        return factory.createUnionTypeNode(source.types.map(convertTypeNode))
    case "StringLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(factory.createStringLiteral(source.value))
    case "NumberTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword)
    case "StringTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.StringKeyword)
    case "BooleanTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword)
    case "NullLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(factory.createNull())
    case "ObjectTypeAnnotation":
        return convertObjectType(source, "export")
    case "GenericTypeAnnotation":
        return convertGenericTypeAnnotation(source)
    default:
        return factory.createLiteralTypeNode(factory.createStringLiteral("TODO: Support TypeNode " + source.type))
    }
}