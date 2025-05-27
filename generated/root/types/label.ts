// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type LabelT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"label"> & DatePeriodRoleT & IpiCodesRoleT & IsniCodesRoleT & RatableRoleT & ReviewableRoleT & TypeRoleT<LabelTypeT> & {
    area: AreaT | null;
    label_code: number;
    primaryAlias: string | null;
}>;
export type LabelTypeT = OptionTreeT<"label_type">;
