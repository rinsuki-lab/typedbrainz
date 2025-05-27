// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { OptionTreeT } from "../../declared-types.js"
import { ReleaseT } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { PendingEditsRoleT } from "../../declared-types.js"
export type ArtworkRoleT = $ReadOnly<_$Spread<PendingEditsRoleT, {
    comment: string;
    event: EventT;
    filename: string | null;
    huge_ia_thumbnail: string;
    huge_thumbnail: string;
    id: number;
    image: string | null;
    large_ia_thumbnail: string;
    large_thumbnail: string;
    mime_type: string;
    small_ia_thumbnail: string;
    small_thumbnail: string;
    suffix: string;
    types: $ReadOnlyArray<string>;
}>>;
export type ReleaseArtT = $ReadOnly<_$Spread<ArtworkRoleT, {
    release: ReleaseT;
}>>;
export type EventArtT = $ReadOnly<_$Spread<ArtworkRoleT, {
    event: EventT;
}>>;
export type ArtworkT = EventArtT | ReleaseArtT;
export type CommonsImageT = {
    page_url: string;
    thumb_url: string;
};
export type CoverArtTypeT = OptionTreeT<"cover_art_type">;
export type EventArtTypeT = OptionTreeT<"event_art_type">;
