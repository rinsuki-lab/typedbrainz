export class ConverterContext {
    currentFilePath: string | null = null;
    typeNameToDeclaredFilePath = new Map<string, string>();

    addDeclaredTypeName(typeName: string) {
        if (this.currentFilePath == null) {
            throw new Error("No current file path set");
        }
        this.typeNameToDeclaredFilePath.set(typeName, this.currentFilePath);
    }
}