// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { StrOrNum } from "../../declared-types.js"
export type AnchorProps = {
    className: string;
    href: string;
    rel: "noopener noreferrer";
    target: "_blank";
    title: string;
};
export type VarSubstScalarArg = StrOrNum | "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier";
export type VarSubstArg = VarSubstScalarArg | $ReadOnlyArray<VarSubstScalarArg>;
export type Expand2ReactInput = VarSubstArg | AnchorProps;
export type Expand2ReactScalarOutput = string | "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier";
export type Expand2ReactOutput = Expand2ReactScalarOutput | Array<Expand2ReactScalarOutput>;
export type ExpandLFunc<Input, Output> = "TODO: Support TypeNode FunctionTypeAnnotation";
export type N_l_T = "TODO: Support TypeNode FunctionTypeAnnotation";
