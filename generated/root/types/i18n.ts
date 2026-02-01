// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { StrOrNum } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type AnchorProps = {
    className?: string;
    href: string;
    rel?: "noopener noreferrer";
    target?: "_blank";
    title?: string;
};
export type VarSubstScalarArg = StrOrNum | React.MixedElement;
export type VarSubstArg = VarSubstScalarArg | $ReadOnlyArray<VarSubstScalarArg>;
export type Expand2ReactInput = VarSubstArg | AnchorProps;
export type Expand2ReactScalarOutput = string | React.MixedElement;
export type Expand2ReactOutput = Expand2ReactScalarOutput | Array<Expand2ReactScalarOutput>;
export type ExpandLFunc<Input, Output> = (key: string, args: {
    [arg: string]: Input | Output | string;
}) => Output;
export type N_l_T = () => string;
