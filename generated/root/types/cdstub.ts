// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EntityRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type CDStubT = $ReadOnly<$_$Spread<EntityRoleT<"cdstub">, {
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
