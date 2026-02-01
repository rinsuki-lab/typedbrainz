import { factory, ParameterDeclaration, SyntaxKind } from "typescript";
import { convertTypeNode } from "./type-node.js";
import assert from "assert";
import { convertExpression } from "./expr.js";

export function convertFunctionTypeParam(param: any, i: number): ParameterDeclaration {
    if (param.type === "Identifier") {
        return factory.createParameterDeclaration(
            undefined, // TODO?
            undefined, // TODO?
            param.name,
            param.optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined, // TODO?
            param.typeAnnotation == null ? undefined : convertTypeNode(param.typeAnnotation)
        )
    } else if (param.type === "AssignmentPattern") {
        const left = convertFunctionTypeParam(param.left, i)!
        return {
            ...left,
            initializer: convertExpression(param.right)
        }
    } else if (param.type === "FunctionTypeParam") {
        return factory.createParameterDeclaration(
            undefined,
            undefined,
            param.name?.name ?? `_arg${i}`,
            param.optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined,
            convertTypeNode(param.typeAnnotation)
        )
    } else {
        assert.fail(`Unsupported function type param type: ${param.type}`);
    }
}