import { Expression, factory } from "typescript";
import { convertLiteral } from "./literal.js";
import { convertIdentifier } from "./identifier.js";

export function convertExpression(source: any): Expression {
    switch (source.type) {
    case "Literal":
        return convertLiteral(source)
    case "Identifier":
        return convertIdentifier(source)
    default:
        return factory.createStringLiteral(`Unknown Expression Type: ${source.type}`)
    }
}
