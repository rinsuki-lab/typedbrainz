// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { StrOrNum } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type AnchorProps = {
    className: string;
    href: string;
    rel: "noopener noreferrer";
    target: "_blank";
    title: string;
};
export type VarSubstScalarArg = StrOrNum | "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier";
export type VarSubstArg = VarSubstScalarArg | $ReadOnlyArray<VarSubstScalarArg>;
export type Expand2ReactInput = VarSubstArg | AnchorProps;
export type Expand2ReactScalarOutput = string | "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier";
export type Expand2ReactOutput = Expand2ReactScalarOutput | Array<Expand2ReactScalarOutput>;
export type ExpandLFunc<Input, Output> = "WIP convertTypeNode: FunctionTypeAnnotation";
export type N_l_T = "WIP convertTypeNode: FunctionTypeAnnotation";
