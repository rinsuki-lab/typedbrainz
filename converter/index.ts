import { ConverterContext } from "./context.js"
import { doActualConvert } from "./phase/actual-convert.js"
import { doFindTargets } from "./phase/find-targets.js"
import { doGenerateDeclaredTypeReExport } from "./phase/generate-declared-types-reexport.js"

const ctx = new ConverterContext()

doFindTargets(ctx)
doActualConvert(ctx)
doGenerateDeclaredTypeReExport(ctx)