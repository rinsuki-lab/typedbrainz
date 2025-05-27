// SPDX-License-Identifier: MIT
import assert from "node:assert"
import { factory, ImportClause, ImportSpecifier} from "typescript"
import { convertIdentifier } from "./identifier.js"
import { convertLiteral } from "./literal.js"

export function convertImportDeclaration(body: any) {
    const specifiers = body.specifiers as any[]
    let clause: ImportClause | null
    if (specifiers.length === 0) {
        clause = null
    } else {
        const isTypeOnly = body.importKind === "type"
        if (specifiers[0].type === "ImportNamespaceSpecifier") {
            assert(specifiers.length === 1)
            const spec = specifiers[0]
            clause = factory.createImportClause(
                isTypeOnly,
                undefined,
                factory.createNamespaceImport(
                    convertIdentifier(spec.local)
                )
            )
        } else {
            let defaultIdentifier = null
            const namedImports: ImportSpecifier[] = []
            for (const specifier of specifiers) {
                switch (specifier.type) {
                case "ImportDefaultSpecifier":
                    assert.equal(defaultIdentifier, null, "Only one default import is allowed")
                    defaultIdentifier = convertIdentifier(specifiers[0].local)
                    break
                case "ImportSpecifier":
                    namedImports.push(factory.createImportSpecifier(
                        false,
                        convertIdentifier(specifier.imported),
                        convertIdentifier(specifier.local),
                    ))
                    break
                }
            }
            clause = factory.createImportClause(isTypeOnly, defaultIdentifier ?? undefined, namedImports.length ? factory.createNamedImports(namedImports) : undefined)
        }
    }

    return factory.createImportDeclaration(
        undefined,
        clause ?? undefined,
        convertLiteral(body.source),
    )
}
