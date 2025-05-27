// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type WorkT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"work"> & RatableRoleT & ReviewableRoleT & TypeRoleT<WorkTypeT> & {
    _fromBatchCreateWorksDialog: boolean;
    artists: $ReadOnlyArray<ArtistCreditT>;
    attributes: $ReadOnlyArray<WorkAttributeT>;
    authors: $ReadOnlyArray<{
        credit: string;
        entity: ArtistT;
        roles: $ReadOnlyArray<string>;
    }>;
    iswcs: $ReadOnlyArray<IswcT>;
    languages: $ReadOnlyArray<WorkLanguageT>;
    other_artists: $ReadOnlyArray<{
        credit: string;
        entity: ArtistT;
        roles: $ReadOnlyArray<string>;
    }>;
    primaryAlias: string | null;
    related_artists: {
        artists: AppearancesT<string>;
        authors: AppearancesT<string>;
    };
}>;
export type WorkTypeT = OptionTreeT<"work_type">;
export type WorkLanguageT = {
    language: LanguageT;
};
