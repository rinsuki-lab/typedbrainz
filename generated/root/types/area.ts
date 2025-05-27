// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type AreaT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"area"> & DatePeriodRoleT & TypeRoleT<AreaTypeT> & {
    containment: $ReadOnlyArray<AreaT> | null;
    country_code: string;
    iso_3166_1_codes: $ReadOnlyArray<string>;
    iso_3166_2_codes: $ReadOnlyArray<string>;
    iso_3166_3_codes: $ReadOnlyArray<string>;
    primary_code: string;
    primaryAlias: string | null;
}>;
export type AreaTypeT = OptionTreeT<"area_type">;
