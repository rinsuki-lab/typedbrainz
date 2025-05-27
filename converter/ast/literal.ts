import assert from "node:assert"
import { factory } from "typescript"

export function convertLiteral(source: any) {
    assert(source.type === "Literal")
    return factory.createStringLiteral(source.value)
}