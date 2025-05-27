import { Expression, factory } from "typescript";
import { convertLiteral } from "./literal.js";
import { convertIdentifier } from "./identifier.js";
import { wipLiteral } from "../wip.js";

export function convertExpression(source: any): Expression {
    switch (source.type) {
    case "Literal":
        return convertLiteral(source)
    case "Identifier":
        return convertIdentifier(source)
    default:
        return wipLiteral("convertExpression", source.type);
    }
}
