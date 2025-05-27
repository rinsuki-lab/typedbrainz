// SPDX-License-Identifier: MIT
import { factory, SourceFile, Statement } from "typescript";

export function appended(source: SourceFile, statements: readonly Statement[]): SourceFile {
    return factory.updateSourceFile(source, [
        ...source.statements,
        ...statements,
    ], source.isDeclarationFile, source.referencedFiles, source.typeReferenceDirectives, source.hasNoDefaultLib)
}
