import assert from "node:assert"
import { factory, ImportClause} from "typescript"
import { convertIdentifier } from "./identifier"
import { convertLiteral } from "./literal"

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
            clause = factory.createImportClause(
                isTypeOnly,
                undefined,
                factory.createNamedImports(specifiers.map(spec => {
                    assert(spec.type === "ImportSpecifier")
                    return factory.createImportSpecifier(
                        false,
                        convertIdentifier(spec.imported),
                        convertIdentifier(spec.local),
                    )
                }))
            )
        }
    }

    return factory.createImportDeclaration(
        undefined,
        clause ?? undefined,
        convertLiteral(body.source),
    )
}