import assert from "node:assert"
import { factory } from "typescript"

export function convertIdentifier(source: any) {
    assert.equal(source.type, "Identifier")
    return factory.createIdentifier(source.name)
}

export function convertMayQualifiedTypeIdentifier(source: any) {
    if (source.type === "QualifiedTypeIdentifier") {
        return factory.createQualifiedName(
            convertIdentifier(source.qualification),
            convertIdentifier(source.id)
        )
    }
    return convertIdentifier(source);
}