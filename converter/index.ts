import { ConverterContext } from "./context.js"
import { doActualConvert } from "./phase/actual-convert.js"
import { doGenerateDeclaredTypeReExport } from "./phase/generate-declared-types-reexport.js"

const ctx = new ConverterContext()

doActualConvert(ctx)
doGenerateDeclaredTypeReExport(ctx)