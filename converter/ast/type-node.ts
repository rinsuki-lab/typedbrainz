import { factory } from "typescript";

export function convertTypeNode(source: any) {
    switch (source.type) {
    case "UnionTypeAnnotation":
        return factory.createUnionTypeNode(source.types.map(convertTypeNode))
    case "StringLiteralTypeAnnotation":
        return factory.createLiteralTypeNode(factory.createStringLiteral(source.value))
    default:
        return factory.createLiteralTypeNode(factory.createStringLiteral("TODO: support " + source.type))
    }
}