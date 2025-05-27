// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type CoordinatesT = {
    latitude: number;
    longitude: number;
};
export type PlaceT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"place">, $_$Spread<DatePeriodRoleT, $_$Spread<RatableRoleT, $_$Spread<ReviewableRoleT, $_$Spread<TypeRoleT<PlaceTypeT>, {
    address: string;
    area: AreaT | null;
    coordinates: CoordinatesT | null;
    primaryAlias: string | null;
}>>>>>>>>;
export type PlaceTypeT = OptionTreeT<"place_type">;
