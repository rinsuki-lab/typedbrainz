// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type SeriesEntityTypeT = "artist" | "event" | "recording" | "release" | "release_group" | "work";
export type SeriesT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"series"> & TypeRoleT<SeriesTypeT> & {
    entity_count: number;
    orderingTypeID: number;
    primaryAlias: string | null;
    type: SeriesTypeT;
}>;
export type SeriesItemNumbersRoleT = {
    seriesItemNumbers: $ReadOnlyArray<string>;
};
export type SeriesOrderingTypeT = OptionTreeT<"series_ordering_type">;
export type SeriesTypeT = $ReadOnly<OptionTreeT<"series_type"> & {
    item_entity_type: SeriesEntityTypeT;
}>;
