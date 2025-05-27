// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { TrackWithRecordingT } from "../../../../declared-types.js"
import { MediumWithRecordingsT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
export type CreditsModeT = "bottom" | "inline";
export type LazyReleaseActionT = {
    medium: MediumWithRecordingsT;
    type: "toggle-medium";
} | {
    expanded: boolean;
    mediums: $ReadOnlyArray<MediumWithRecordingsT>;
    type: "toggle-all-mediums";
} | {
    medium: MediumWithRecordingsT;
    tracks: $ReadOnlyArray<TrackWithRecordingT>;
    type: "load-tracks";
};
export type ActionT = {
    type: "toggle-credits-mode";
} | LazyReleaseActionT;
export type LoadedTracksMapT = $ReadOnlyMap<number, $ReadOnlyArray<TrackWithRecordingT>>;
export type LazyReleaseStateT = {
    expandedMediums: $ReadOnlyMap<number, boolean>;
    loadedTracks: LoadedTracksMapT;
};
export type StateT = $ReadOnly<$_$Spread<{
    creditsMode: CreditsModeT;
}, $Exact<LazyReleaseStateT>>>;
