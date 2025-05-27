// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type TracklistChangesAddT = {
    change_type: "+";
    new_track: TrackWithRecordingT;
    old_track: null;
};
export type TracklistChangesChangeT = {
    change_type: "c" | "u";
    new_track: TrackWithRecordingT;
    old_track: TrackWithRecordingT;
};
export type TracklistChangesRemoveT = {
    change_type: "-";
    new_track: null;
    old_track: TrackWithRecordingT;
};
export type OldReleaseEventCompT = {
    barcode: CompT<string | null>;
    catalog_number: CompT<string | null>;
    country: CompT<AreaT>;
    date: CompT<PartialDateT>;
    format: CompT<MediumFormatT | null>;
    label: CompT<LabelT>;
    release: ReleaseT | null;
};
export type OldReleaseEventT = {
    barcode: string | null;
    catalog_number: string | null;
    country: AreaT;
    date: PartialDateT;
    format: MediumFormatT | null;
    label: LabelT;
    release: ReleaseT | null;
};
