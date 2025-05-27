// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type TrackT = $ReadOnly<EntityRoleT<"track"> & LastUpdateRoleT & {
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
}>;
export type TrackWithRecordingT = $ReadOnly<TrackT & {
    recording: RecordingT;
}>;
