export type CreditsModeT = "bottom" | "inline";
export type LazyReleaseActionT = {
    medium: MediumWithRecordingsT;
    type: "toggle-medium";
} | {
    expanded: boolean;
    mediums: $ReadOnlyArray;
    type: "toggle-all-mediums";
} | {
    medium: MediumWithRecordingsT;
    tracks: $ReadOnlyArray;
    type: "load-tracks";
};
export type ActionT = {
    type: "toggle-credits-mode";
} | LazyReleaseActionT;
export type LoadedTracksMapT = $ReadOnlyMap;
export type LazyReleaseStateT = {
    expandedMediums: $ReadOnlyMap;
    loadedTracks: LoadedTracksMapT;
};
export type StateT = $ReadOnly;
