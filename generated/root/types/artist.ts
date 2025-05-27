// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type ArtistT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"artist"> & DatePeriodRoleT & IpiCodesRoleT & IsniCodesRoleT & RatableRoleT & ReviewableRoleT & TypeRoleT<ArtistTypeT> & {
    area: AreaT | null;
    begin_area: AreaT | null;
    begin_area_id: number | null;
    end_area: AreaT | null;
    end_area_id: number | null;
    gender: GenderT | null;
    gender_id: number | null;
    primaryAlias: string | null;
    sort_name: string;
}>;
export type ArtistTypeT = OptionTreeT<"artist_type">;
export type GenderT = OptionTreeT<"gender">;
