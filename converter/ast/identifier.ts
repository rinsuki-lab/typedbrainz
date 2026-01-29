// SPDX-License-Identifier: MIT
import assert from "node:assert"
import { factory } from "typescript"

export function convertIdentifier(source: any) {
    assert.equal(source.type, "Identifier")
    return factory.createIdentifier(source.name)
}

export function convertMayPrivateIdentifier(source: any) {
    if (source.type === "Identifier") {
        return factory.createIdentifier(source.name)
    } else if (source.type === "PrivateIdentifier") {
        // TypeScript の PrivateIdentifier は # から始まるが、FlowTypeはそうではない
        return factory.createPrivateIdentifier("#" + source.name)
    } else {
        throw new Error(`Unknown Type: ${source.type}`)
    }
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
