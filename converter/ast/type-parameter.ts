import { factory } from "typescript";
import { convertTypeNode } from "./type-node.js";

export function convertTypeParameter(tp: any) {
    return factory.createTypeParameterDeclaration(
        undefined,
        tp.name,
        tp.bound == null ? undefined : convertTypeNode(tp.bound.typeAnnotation),
        tp.default == null ? undefined : convertTypeNode(tp.default), // TODO: default type
    );
}