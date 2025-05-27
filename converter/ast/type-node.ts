import { factory, SyntaxKind } from "typescript";

export function convertTypeNode(source: any) {
    switch (source.type) {
    case "UnionTypeAnnotation":
        return factory.createUnionTypeNode(source.types.map(convertTypeNode))
    case "StringLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(factory.createStringLiteral(source.value))
    case "NumberTypeAnnotation":
        return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword)
    default:
        return factory.createLiteralTypeNode(factory.createStringLiteral("TODO: Support TypeNode " + source.type))
    }
}