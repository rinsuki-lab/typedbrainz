import { factory, HeritageClause, SyntaxKind } from "typescript";
import { convertIdentifier, convertMayPrivateIdentifier, convertMayQualifiedTypeIdentifier } from "./identifier.js";
import { wipLiteral } from "../wip.js";
import { convertTypeNode } from "./type-node.js";
import { convertExpression } from "./expr.js";
import { ConverterContext } from "../context.js";
import { convertTypeParameter } from "./type-parameter.js";
import { convertFunctionTypeParam } from "./function-type-param.js";

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
                console.log(node.value.params)
                return factory.createMethodDeclaration(
                    undefined,
                    undefined,
                    convertIdentifier(node.key),
                    undefined,
                    undefined,
                    node.value.params.map(convertFunctionTypeParam),
                    node.value.returnType == null ? /* HACK: if we don't have both return type or body, TS would assume returning any, which may causes some problems in users program */ factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword) : convertTypeNode(node.value.returnType.typeAnnotation),
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