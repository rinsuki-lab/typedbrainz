// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { EntityRoleT } from "../../declared-types.js"
export type CDStubT = $ReadOnly<_$Spread<EntityRoleT<"cdstub">, {
    artist: string;
    barcode: string;
    comment: string;
    date_added: string | null;
    discid: string;
    last_modified: string | null;
    leadout_offset: number | null;
    lookup_count: number | null;
    modify_count: number | null;
    title: string;
    toc: string | null;
    track_count: number;
    track_offset: $ReadOnlyArray<number> | null;
    tracks: $ReadOnlyArray<CDStubTrackT>;
}>>;
export type CDStubTrackT = $ReadOnly<{
    artist: string;
    length: number;
    sequence: number;
    title: string;
}>;
