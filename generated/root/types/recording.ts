// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type RecordingT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"recording"> & RatableRoleT & ReviewableRoleT & {
    appearsOn: AppearancesT<{
        gid: string;
        name: string;
    }>;
    artist: string;
    artistCredit: ArtistCreditT;
    first_release_date: PartialDateT;
    isrcs: $ReadOnlyArray<IsrcT>;
    length: number;
    primaryAlias: string | null;
    related_works: $ReadOnlyArray<number>;
    video: boolean;
}>;
export type RecordingWithArtistCreditT = $ReadOnly<RecordingT & {
    artistCredit: ArtistCreditT;
}>;
export type ReleaseGroupAppearancesT = {
    hits: number;
    results: $ReadOnlyArray<ReleaseGroupT>;
};
export type ReleaseGroupAppearancesMapT = {};
