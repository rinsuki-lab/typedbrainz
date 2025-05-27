import { ConverterContext } from "./context.js"
import { doActualConvert } from "./phase/actual-convert.js"
import { doFindTargets } from "./phase/find-targets.js"
import { doGenerateDeclaredTypeReExport } from "./phase/generate-declared-types-reexport.js"

const ctx = new ConverterContext()

ctx.targets = [
    "upstream/root/static/scripts/relationship-editor/types.js",
]
doFindTargets(ctx)
doActualConvert(ctx)
doGenerateDeclaredTypeReExport(ctx)