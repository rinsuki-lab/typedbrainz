// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type CritiqueBrainzUserT = {
    id: string;
    name: string;
};
export type CritiqueBrainzReviewT = {
    author: CritiqueBrainzUserT;
    body: string;
    created: string;
    id: string;
    rating: number | null;
};
export type ReviewableT = ArtistT | EventT | LabelT | PlaceT | RecordingT | ReleaseGroupT | WorkT;
export type ReviewableRoleT = {
    review_count: number;
};
