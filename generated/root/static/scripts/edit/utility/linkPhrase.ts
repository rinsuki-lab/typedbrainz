// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { LinkAttrT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import commaList, { commaListText as commaListText } from "../../common/i18n/commaList.js";
import { VarArgsClass as VarArgsClass, VarArgsObject as VarArgsObject } from "../../common/i18n/expand2.js";
import { expand2reactWithVarArgsInstance as expand2reactWithVarArgsInstance } from "../../common/i18n/expand2react.js";
import { expand2textWithVarArgsClass as expand2textWithVarArgsClass } from "../../common/i18n/expand2text.js";
import linkedEntities from "../../common/linkedEntities.mjs";
import clean from "../../common/utility/clean.js";
import { compareStrings as compareStrings } from "../../common/utility/compare.mjs";
import displayLinkAttribute, { displayLinkAttributeText as displayLinkAttributeText } from "../../common/utility/displayLinkAttribute.js";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
type LinkAttrs = Array<LinkAttrT> | LinkAttrT;
type LinkAttrsByRootName = {
    [attributeName: string]: LinkAttrs;
};
export type LinkPhraseProp = "link_phrase" | "long_link_phrase" | "reverse_link_phrase";
class PhraseVarArgs<T> implements VarArgsClass<T> {
    data: VarArgsObject<LinkAttrs>;
    i18n: LinkPhraseI18n<T>;
    entity0: T;
    entity1: T;
    usedPhraseAttributes: Array<string>;
    #nextKey: number;
    constructor(args: VarArgsObject<LinkAttrs> | null | undefined, i18n: LinkPhraseI18n<T>, entity0: T | null | undefined, entity1: T | null | undefined): unknown;
    get(name: string): T;
    getKey(name: string): string;
    has(name: string): boolean;
}
export type LinkPhraseI18n<T> = {
    commaList: "WIP convertTypeNode: FunctionTypeAnnotation";
    defaultValue: T;
    displayLinkAttribute: "WIP convertTypeNode: FunctionTypeAnnotation";
    expand: "WIP convertTypeNode: FunctionTypeAnnotation";
};
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
export const getPhraseAndExtraAttributesText = "WIP convertExpression: ArrowFunctionExpression";
export const interpolate = "WIP convertExpression: ArrowFunctionExpression";
export const interpolateText = "WIP convertExpression: ArrowFunctionExpression";
export const getExtraAttributes = "WIP convertExpression: ArrowFunctionExpression";
export const stripAttributes = "WIP convertExpression: ArrowFunctionExpression";
