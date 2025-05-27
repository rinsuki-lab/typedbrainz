// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
export type DeepReadOnly<T> = "TODO: Support TypeNode ConditionalTypeAnnotation";
export type PagerT = {
    current_page: number;
    entries_per_page: number;
    first_page: 1;
    last_page: number;
    next_page: number | null;
    previous_page: number | null;
    total_entries: number;
};
export type StrOrNum = string | number;
