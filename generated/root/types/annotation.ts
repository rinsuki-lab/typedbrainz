// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type AnnotatedEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type AnnotatedEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type AnnotationRoleT = {
    latest_annotation: AnnotationT;
};
export type AnnotationT = {
    changelog: string;
    creation_date: string;
    editor: EditorT | null;
    html: string;
    id: number;
    parent: AnnotatedEntityT | null;
    text: string | null;
};
