// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { TrackWithRecordingT } from "../../../../declared-types.js"
import { MediumWithRecordingsT } from "../../../../declared-types.js"
export type CreditsModeT = "bottom" | "inline";
export type LazyReleaseActionT = ({
    medium: MediumWithRecordingsT;
    type: "toggle-medium";
}) | ({
    expanded: boolean;
    mediums: $ReadOnlyArray<MediumWithRecordingsT>;
    type: "toggle-all-mediums";
}) | ({
    medium: MediumWithRecordingsT;
    tracks: $ReadOnlyArray<TrackWithRecordingT>;
    type: "load-tracks";
});
export type ActionT = ({
    type: "toggle-credits-mode";
}) | LazyReleaseActionT;
export type LoadedTracksMapT = $ReadOnlyMap<number, $ReadOnlyArray<TrackWithRecordingT>>;
export type LazyReleaseStateT = {
    expandedMediums: $ReadOnlyMap<number, boolean>;
    loadedTracks: LoadedTracksMapT;
};
export type StateT = $ReadOnly<$Exact<LazyReleaseStateT> & {
    creditsMode: CreditsModeT;
}>;
