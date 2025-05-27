import { createPrinter, createSourceFile, factory, ScriptKind, ScriptTarget, Statement } from "typescript";
import { ConverterContext } from "../context.js";
import { appended } from "../utils.js";
import { writeFileSync } from "node:fs";

export function doGenerateDeclaredTypeReExport(ctx: ConverterContext) {
    // generate declared types export file
    let declaredTypesFile = createSourceFile(
        "", "",
        ScriptTarget.ESNext, false, ScriptKind.TS
    )

    const declaredTypesStatements: Statement[] = Array.from(ctx.typeNameToDeclaredFilePath.entries().map(([typeName, filePath]) => {
        return factory.createExportDeclaration(
            undefined,
            true,
            factory.createNamedExports([
                factory.createExportSpecifier(
                    false,
                    undefined,
                    typeName,
                )
            ]),
            factory.createStringLiteral(filePath.replace("upstream", ".")),
        )
    }))

    declaredTypesFile = appended(declaredTypesFile, declaredTypesStatements);
    const printer = createPrinter();
    const declaredTypesText = printer.printFile(declaredTypesFile);
    writeFileSync("generated/declared-types.ts", declaredTypesText);
}