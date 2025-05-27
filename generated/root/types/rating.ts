// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type RatableRoleT = {
    rating: number;
    rating_count: number;
    user_rating: number;
};
export type RatableT = ArtistT | EventT | LabelT | PlaceT | RecordingT | ReleaseGroupT | WorkT;
export type RatableEntityTypeT = "artist" | "event" | "label" | "place" | "recording" | "release_group" | "work";
export type RatingT = {
    editor: EditorT;
    rating: number;
};
