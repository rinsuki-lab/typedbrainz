import assert from "node:assert";
import { factory } from "typescript";
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

export function convertTypeAnnotation(source: any) {
    if (source == null) return undefined

    switch (source.type) {
    case "GenericTypeAnnotation": {
        return convertGenericTypeAnnotation(source)
    }
    default:
        return factory.createLiteralTypeNode(
            factory.createStringLiteral(`Unknown Type Annotaton Type: ${source.type}`)
        )
    }
}