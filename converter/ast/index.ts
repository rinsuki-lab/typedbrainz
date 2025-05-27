import { factory } from "typescript"
import { convertImportDeclaration } from "./import"

export function convertAST(body: any) {
    switch (body.type) {
    case "ImportDeclaration": {
        return [convertImportDeclaration(body)]
    }
    case "ExportNamedDeclaration": {
        break
    }
    default:
        // console.log(JSON.stringify(body, null, 4))
        return [factory.createExpressionStatement(
            factory.createStringLiteral("Unknown Type: " + body.type)
        )]
    }
}
