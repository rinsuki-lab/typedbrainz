// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type ReleaseGroupSecondaryTypeT = OptionTreeT<"release_group_secondary_type">;
export type ReleaseGroupT = $ReadOnly<AnnotationRoleT & ArtistCreditRoleT & CommentRoleT & RelatableEntityRoleT<"release_group"> & RatableRoleT & ReviewableRoleT & TypeRoleT<ReleaseGroupTypeT> & {
    cover_art: ReleaseArtT;
    firstReleaseDate: string | null;
    hasCoverArt: boolean;
    l_type_name: string | null;
    primaryAlias: string | null;
    release_count: number;
    release_group: ReleaseGroupT;
    secondaryTypeIDs: $ReadOnlyArray<number>;
    typeID: number | null;
    typeName: string | null;
}>;
export type ReleaseGroupTypeT = OptionTreeT<"release_group_type"> & {
    historic: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
};
export type ReleaseGroupHistoricTypeT = {
    historic: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
    id: number;
    name: string;
};
