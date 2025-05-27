// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type InstrumentCreditsAndRelTypesT = {};
export type InstrumentCreditsAndRelTypesRoleT = {
    instrumentCreditsAndRelTypes?: InstrumentCreditsAndRelTypesT;
};
export type InstrumentT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"instrument">, $_$Spread<TypeRoleT<InstrumentTypeT>, {
    description: string;
    primaryAlias?: string | null;
}>>>>>;
export type InstrumentTypeT = OptionTreeT<"instrument_type">;
