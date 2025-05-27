// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EntityRoleT } from "../../declared-types.js"
import { PendingEditsRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
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
