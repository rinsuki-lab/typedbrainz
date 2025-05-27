// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { OptionTreeT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
export type InstrumentCreditsAndRelTypesT = {};
export type InstrumentCreditsAndRelTypesRoleT = {
    instrumentCreditsAndRelTypes: InstrumentCreditsAndRelTypesT;
};
export type InstrumentT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"instrument">, _$Spread<TypeRoleT<InstrumentTypeT>, {
    description: string;
    primaryAlias: string | null;
}>>>>>;
export type InstrumentTypeT = OptionTreeT<"instrument_type">;
