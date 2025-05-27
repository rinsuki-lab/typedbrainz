// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { TrackWithRecordingT } from "../../declared-types.js"
import { PagerT } from "../../declared-types.js"
import { TrackT } from "../../declared-types.js"
import { LastUpdateRoleT } from "../../declared-types.js"
import { OptionTreeT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
export type CDTocT = $ReadOnly<_$Spread<EntityRoleT<"cdtoc">, {
    discid: string;
    freedb_id: string;
    leadout_offset: number;
    length: number;
    track_count: number;
    track_details: $ReadOnlyArray<{
        end_sectors: number;
        end_time: number;
        length_sectors: number;
        length_time: number;
        start_sectors: number;
        start_time: number;
    }>;
    track_offset: $ReadOnlyArray<number>;
}>>;
export type MediumCDTocT = $ReadOnly<_$Spread<EntityRoleT<"medium_cdtoc">, {
    cdtoc: CDTocT;
    editsPending: boolean;
    medium: MediumT;
}>>;
export type MediumFormatT = _$Spread<OptionTreeT<"medium_format">, {
    has_discids: boolean;
    year: "TODO: Support TypeNode NullableTypeAnnotation";
}>;
export type MediumT = $ReadOnly<_$Spread<EntityRoleT<"medium">, _$Spread<LastUpdateRoleT, {
    cdtoc_track_count: number | null;
    cdtoc_track_lengths: $ReadOnlyArray<number | null>;
    cdtoc_tracks: $ReadOnlyArray<TrackT>;
    cdtocs: $ReadOnlyArray<string>;
    data_track_lengths: $ReadOnlyArray<number | null>;
    editsPending: boolean;
    format: MediumFormatT | null;
    format_id: number | null;
    gid: string;
    may_have_discids: boolean;
    name: string;
    position: number;
    pregap_length: $ReadOnlyArray<number | null>;
    release_id: number;
    track_count: number | null;
    tracks: $ReadOnlyArray<TrackT>;
    tracks_pager: PagerT;
}>>>;
export type MediumWithRecordingsT = $ReadOnly<_$Spread<MediumT, {
    tracks: $ReadOnlyArray<TrackWithRecordingT>;
}>>;
