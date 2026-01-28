// SPDX-License-Identifier: MIT
import { ConverterContext } from "./context.js"
import { doActualConvert } from "./phase/actual-convert.js"
import { doFindMissingDeclaredTypes } from "./phase/find-missing-declared-types.js"
import { doFindTargets } from "./phase/find-targets.js"
import { doGenerateDeclaredTypeReExport } from "./phase/generate-declared-types-reexport.js"

const ctx = new ConverterContext()

ctx.targets = [
    "upstream/root/static/scripts/relationship-editor/types.js",
    "upstream/root/static/scripts/relationship-editor/types/actions.js",
    "upstream/root/static/scripts/edit/externalLinks.js",
]
doFindTargets(ctx)
doActualConvert(ctx)
doGenerateDeclaredTypeReExport(ctx)
doFindMissingDeclaredTypes(ctx)
