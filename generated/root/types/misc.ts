// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
export type DeepReadOnly<T> = "TODO: Support TypeNode ConditionalTypeAnnotation";
export type PagerT = {
    current_page: number;
    entries_per_page: number;
    first_page: "TODO: Support TypeNode NumberLiteralTypeAnnotation";
    last_page: number;
    next_page: number | null;
    previous_page: number | null;
    total_entries: number;
};
export type StrOrNum = string | number;
