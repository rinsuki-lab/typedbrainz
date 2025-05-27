// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type CoordinatesT = {
    latitude: number;
    longitude: number;
};
export type PlaceT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"place"> & DatePeriodRoleT & RatableRoleT & ReviewableRoleT & TypeRoleT<PlaceTypeT> & {
    address: string;
    area: AreaT | null;
    coordinates: CoordinatesT | null;
    primaryAlias: string | null;
}>;
export type PlaceTypeT = OptionTreeT<"place_type">;
