import { factory, HeritageClause, SyntaxKind } from "typescript";
import { convertIdentifier, convertMayPrivateIdentifier, convertMayQualifiedTypeIdentifier } from "./identifier.js";
import { wipLiteral } from "../wip.js";
import { convertTypeNode } from "./type-node.js";
import { convertExpression } from "./expr.js";
import { convertAST } from "./index.js";
import { ConverterContext } from "../context.js";
import { convertTypeParameter } from "./type-parameter.js";

function convertSuperclass(token: HeritageClause["token"], superClass: any, superTypeParameters: any) {
    console.log("!!!", superClass, superTypeParameters)
    return factory.createHeritageClause(token,[factory.createExpressionWithTypeArguments(
        convertExpression(superClass),
        superTypeParameters == null ? undefined : superTypeParameters.params.map(param => convertTypeNode(param)),
    )])
}

export function convertClassDeclaration(ctx: ConverterContext, source: any, flag?: "export") {
    console.log(source)
    // throw new Error("a");
    // return []
    return factory.createClassDeclaration(
        flag === "export" ? [factory.createToken(SyntaxKind.ExportKeyword)] : [],
        convertIdentifier(source.id), // name,
        source.typeParameters == null ? undefined : source.typeParameters.params.map(tp => convertTypeParameter(tp)), // type parameters,
        [
            ...(source.superClass == null ? [] : [
                convertSuperclass(SyntaxKind.ExtendsKeyword, source.superClass, source.superTypeParameters)
            ]),
            ...source.implements.map(impl => convertSuperclass(SyntaxKind.ImplementsKeyword, impl.id, impl.typeParameters)),
        ], // heritageClauses
        source.body.body.map(node => {
            switch (node.type) {
            case "PropertyDefinition": {
                return factory.createPropertyDeclaration(
                    undefined, // TODO?
                    convertMayPrivateIdentifier(node.key),
                    undefined,
                    convertTypeNode(node.typeAnnotation.typeAnnotation),
                    node.value == null ? undefined : convertExpression(node.value),
                )
            }
            case "MethodDefinition":
                return factory.createMethodDeclaration(
                    undefined,
                    undefined,
                    convertIdentifier(node.key),
                    undefined,
                    undefined,
                    node.value.params.map(param => {
                        return factory.createParameterDeclaration(
                            undefined, // TODO?
                            undefined, // TODO?
                            param.name,
                            undefined, // TODO?
                            param.typeAnnotation == null ? undefined : convertTypeNode(param.typeAnnotation.typeAnnotation)
                        )
                    }),
                    node.value.returnType == null ? undefined : convertTypeNode(node.value.returnType.typeAnnotation),
                    undefined/* factory.createBlock(node.value.body.body.flatMap(b => convertAST(ctx, b)))*/,
                )
            default:
                return factory.createPropertyDeclaration(
                    undefined,
                    wipLiteral("convertClassBody", node.type),
                    undefined,
                    undefined,
                    undefined
                )
            }
        }), // memberes
    )
}