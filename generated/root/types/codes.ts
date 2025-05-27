// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type IpiCodesRoleT = {
    ipi_codes: $ReadOnlyArray<IpiCodeT>;
};
export type IpiCodeT = PendingEditsRoleT & {
    ipi: string;
};
export type IsniCodesRoleT = {
    isni_codes: $ReadOnlyArray<IsniCodeT>;
};
export type IsniCodeT = PendingEditsRoleT & {
    isni: string;
};
export type IsrcT = EntityRoleT<"isrc"> & PendingEditsRoleT & {
    isrc: string;
    recording_id: number;
};
export type IswcT = EntityRoleT<"iswc"> & PendingEditsRoleT & {
    iswc: string;
    work_id: number;
};
