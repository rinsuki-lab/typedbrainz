// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type AreaT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"area">, $_$Spread<DatePeriodRoleT, $_$Spread<TypeRoleT<AreaTypeT>, {
    containment: $ReadOnlyArray<AreaT> | null;
    country_code: string;
    iso_3166_1_codes: $ReadOnlyArray<string>;
    iso_3166_2_codes: $ReadOnlyArray<string>;
    iso_3166_3_codes: $ReadOnlyArray<string>;
    primary_code: string;
    primaryAlias?: string | null;
}>>>>>>;
export type AreaTypeT = OptionTreeT<"area_type">;
