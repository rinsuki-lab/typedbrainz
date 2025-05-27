import assert from "node:assert"
import { factory } from "typescript"
import { wipLiteral } from "../wip.js"

export function convertLiteral(source: any) {
    assert(source.type === "Literal")
    switch (typeof source.value) {
    case "string":
        return factory.createStringLiteral(source.value)
    case "number":
        return factory.createNumericLiteral(source.value)
    default:
        return wipLiteral("convertLiteral", source.type)
    }
}