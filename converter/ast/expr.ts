import { factory } from "typescript";
import { convertLiteral } from "./literal";

export function convertExpression(source: any) {
    switch (source.type) {
    case "Literal":
        return convertLiteral(source)
    default:
        return factory.createStringLiteral(`Unknown Expression Type: ${source.type}`)
    }
}