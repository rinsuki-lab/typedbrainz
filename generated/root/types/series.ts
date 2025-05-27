// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type SeriesEntityTypeT = "artist" | "event" | "recording" | "release" | "release_group" | "work";
export type SeriesT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"series">, $_$Spread<TypeRoleT<SeriesTypeT>, {
    entity_count?: number;
    orderingTypeID: number;
    primaryAlias?: string | null;
    type?: SeriesTypeT;
}>>>>>;
export type SeriesItemNumbersRoleT = {
    seriesItemNumbers?: $ReadOnlyArray<string>;
};
export type SeriesOrderingTypeT = OptionTreeT<"series_ordering_type">;
export type SeriesTypeT = $ReadOnly<$_$Spread<OptionTreeT<"series_type">, {
    item_entity_type: SeriesEntityTypeT;
}>>;
