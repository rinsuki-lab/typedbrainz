// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { EntityRoleT } from "../../declared-types.js"
import { PendingEditsRoleT } from "../../declared-types.js"
export type IpiCodesRoleT = {
    ipi_codes: $ReadOnlyArray<IpiCodeT>;
};
export type IpiCodeT = _$Spread<PendingEditsRoleT, {
    ipi: string;
}>;
export type IsniCodesRoleT = {
    isni_codes: $ReadOnlyArray<IsniCodeT>;
};
export type IsniCodeT = _$Spread<PendingEditsRoleT, {
    isni: string;
}>;
export type IsrcT = _$Spread<EntityRoleT<"isrc">, _$Spread<PendingEditsRoleT, {
    isrc: string;
    recording_id: number;
}>>;
export type IswcT = _$Spread<EntityRoleT<"iswc">, _$Spread<PendingEditsRoleT, {
    iswc: string;
    work_id: number;
}>>;
