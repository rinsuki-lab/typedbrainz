// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type WorkAttributeT = {
    id: number | null;
    typeID: number;
    typeName: string;
    value: string;
    value_id: number | null;
};
export type WorkAttributeTypeAllowedValueT = OptionTreeT<"work_attribute_type_allowed_value"> & {
    value: string;
    workAttributeTypeID: number;
};
export type WorkAttributeTypeAllowedValueTreeT = WorkAttributeTypeAllowedValueT & {
    children: $ReadOnlyArray<WorkAttributeTypeAllowedValueTreeT>;
};
export type WorkAttributeTypeAllowedValueTreeRootT = {
    children: $ReadOnlyArray<WorkAttributeTypeAllowedValueTreeT>;
};
export type WorkAttributeTypeT = CommentRoleT & OptionTreeT<"work_attribute_type"> & {
    free_text: boolean;
};
export type WorkAttributeTypeTreeT = WorkAttributeTypeT & {
    children: $ReadOnlyArray<WorkAttributeTypeTreeT>;
};
export type WorkAttributeTypeTreeRootT = {
    children: $ReadOnlyArray<WorkAttributeTypeTreeT>;
};
