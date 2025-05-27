// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { CommentRoleT } from "../../declared-types.js"
import { OptionTreeT } from "../../declared-types.js"
export type WorkAttributeT = {
    id: number | null;
    typeID: number;
    typeName: string;
    value: string;
    value_id: number | null;
};
export type WorkAttributeTypeAllowedValueT = _$Spread<OptionTreeT<"work_attribute_type_allowed_value">, {
    value: string;
    workAttributeTypeID: number;
}>;
export type WorkAttributeTypeAllowedValueTreeT = _$Spread<WorkAttributeTypeAllowedValueT, {
    children: $ReadOnlyArray<WorkAttributeTypeAllowedValueTreeT>;
}>;
export type WorkAttributeTypeAllowedValueTreeRootT = {
    children: $ReadOnlyArray<WorkAttributeTypeAllowedValueTreeT>;
};
export type WorkAttributeTypeT = _$Spread<CommentRoleT, _$Spread<OptionTreeT<"work_attribute_type">, {
    free_text: boolean;
}>>;
export type WorkAttributeTypeTreeT = _$Spread<WorkAttributeTypeT, {
    children: $ReadOnlyArray<WorkAttributeTypeTreeT>;
}>;
export type WorkAttributeTypeTreeRootT = {
    children: $ReadOnlyArray<WorkAttributeTypeTreeT>;
};
