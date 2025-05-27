// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { PendingEditsRoleT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type AliasT<T> = $ReadOnly<_$Spread<DatePeriodRoleT, _$Spread<EntityRoleT<"alias">, _$Spread<PendingEditsRoleT, _$Spread<TypeRoleT<T>, {
    locale: string | null;
    name: string;
    primary_for_locale: boolean;
    sort_name: string;
}>>>>>;
export type AreaAliasTypeT = OptionTreeT<"area_alias_type">;
export type AreaAliasT = AliasT<AreaAliasTypeT>;
export type ArtistAliasTypeT = OptionTreeT<"artist_alias_type">;
export type ArtistAliasT = AliasT<ArtistAliasTypeT>;
export type EventAliasTypeT = OptionTreeT<"event_alias_type">;
export type EventAliasT = AliasT<EventAliasTypeT>;
export type GenreAliasTypeT = OptionTreeT<"genre_alias_type">;
export type GenreAliasT = AliasT<GenreAliasTypeT>;
export type InstrumentAliasTypeT = OptionTreeT<"instrument_alias_type">;
export type InstrumentAliasT = AliasT<InstrumentAliasTypeT>;
export type LabelAliasTypeT = OptionTreeT<"label_alias_type">;
export type LabelAliasT = AliasT<LabelAliasTypeT>;
export type PlaceAliasTypeT = OptionTreeT<"place_alias_type">;
export type PlaceAliasT = AliasT<PlaceAliasTypeT>;
export type RecordingAliasTypeT = OptionTreeT<"recording_alias_type">;
export type RecordingAliasT = AliasT<RecordingAliasTypeT>;
export type ReleaseAliasTypeT = OptionTreeT<"release_alias_type">;
export type ReleaseAliasT = AliasT<ReleaseAliasTypeT>;
export type ReleaseGroupAliasTypeT = OptionTreeT<"releaseGroup_alias_type">;
export type ReleaseGroupAliasT = AliasT<ReleaseGroupAliasTypeT>;
export type SeriesAliasTypeT = OptionTreeT<"series_alias_type">;
export type SeriesAliasT = AliasT<SeriesAliasTypeT>;
export type WorkAliasTypeT = OptionTreeT<"work_alias_type">;
export type WorkAliasT = AliasT<WorkAliasTypeT>;
export type AnyAliasT = AliasT<AreaAliasTypeT | ArtistAliasTypeT | EventAliasTypeT | GenreAliasTypeT | InstrumentAliasTypeT | LabelAliasTypeT | PlaceAliasTypeT | RecordingAliasTypeT | ReleaseAliasTypeT | ReleaseGroupAliasTypeT | SeriesAliasTypeT | WorkAliasTypeT>;
