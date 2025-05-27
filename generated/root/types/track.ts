// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RecordingT } from "../../declared-types.js"
import { MediumT } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { LastUpdateRoleT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type TrackT = $ReadOnly<$_$Spread<EntityRoleT<"track">, $_$Spread<LastUpdateRoleT, {
    artist: string;
    artistCredit: ArtistCreditT;
    editsPending: boolean;
    gid: string;
    isDataTrack: boolean;
    length: number;
    medium: MediumT | null;
    medium_id: number | null;
    name: string;
    number: string;
    position: number;
    recording: RecordingT;
}>>>;
export type TrackWithRecordingT = $ReadOnly<$_$Spread<TrackT, {
    recording: RecordingT;
}>>;
