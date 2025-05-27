import assert from "node:assert"
import { factory } from "typescript"

export function convertLiteral(source: any) {
    assert(source.type === "Literal")
    switch (typeof source.value) {
    case "string":
        return factory.createStringLiteral(source.value)
    case "number":
        return factory.createNumericLiteral(source.value)
    default:
        return factory.createStringLiteral(`Unknown Literal typeof: ${typeof source.value}`)
    }
}