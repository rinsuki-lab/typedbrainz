// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { ReleaseT } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { PendingEditsRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
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
