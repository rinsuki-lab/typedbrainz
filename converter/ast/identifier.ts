import assert from "node:assert"
import { factory } from "typescript"

export function convertIdentifier(source: any) {
    assert(source.type === "Identifier")
    return factory.createIdentifier(source.name)
}