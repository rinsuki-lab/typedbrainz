// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type QualityT = "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation";
export type ReleaseEventT = {
    country: AreaT | null;
    date: PartialDateT | null;
};
export type ReleaseLabelT = {
    catalogNumber: string | null;
    label: LabelT | null;
    label_id: number | null;
};
export type ReleasePackagingT = OptionTreeT<"release_packaging">;
export type ReleaseStatusT = OptionTreeT<"release_status">;
export type ReleaseT = $ReadOnly<AnnotationRoleT & ArtistCreditRoleT & CommentRoleT & RelatableEntityRoleT<"release"> & {
    barcode: string | null;
    combined_format_name: string;
    combined_track_count: string;
    cover_art_presence: "absent" | "present" | "darkened" | null;
    events: $ReadOnlyArray<ReleaseEventT>;
    has_no_tracks: boolean;
    labels: $ReadOnlyArray<ReleaseLabelT>;
    language: LanguageT | null;
    languageID: number | null;
    length: number;
    may_have_cover_art: boolean;
    may_have_discids: boolean;
    mediums: $ReadOnlyArray<MediumT>;
    packagingID: number | null;
    primaryAlias: string | null;
    quality: QualityT;
    releaseGroup: ReleaseGroupT;
    script: ScriptT | null;
    scriptID: number | null;
    status: ReleaseStatusT | null;
    statusID: number | null;
}>;
export type ReleaseWithMediumsT = $ReadOnly<ReleaseT & {
    mediums: $ReadOnlyArray<MediumWithRecordingsT>;
}>;
