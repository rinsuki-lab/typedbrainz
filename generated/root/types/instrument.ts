// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type InstrumentCreditsAndRelTypesT = {};
export type InstrumentCreditsAndRelTypesRoleT = {
    instrumentCreditsAndRelTypes: InstrumentCreditsAndRelTypesT;
};
export type InstrumentT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"instrument"> & TypeRoleT<InstrumentTypeT> & {
    description: string;
    primaryAlias: string | null;
}>;
export type InstrumentTypeT = OptionTreeT<"instrument_type">;
