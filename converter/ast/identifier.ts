import assert from "node:assert"
import { factory } from "typescript"

export function convertIdentifier(source: any) {
    assert.equal(source.type, "Identifier")
    return factory.createIdentifier(source.name)
}