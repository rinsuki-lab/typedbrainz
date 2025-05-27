// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
export type LanguageT = {
    entityType: "language";
    frequency: 0 | 1 | 2;
    id: number;
    iso_code_1: string | null;
    iso_code_2b: string | null;
    iso_code_2t: string | null;
    iso_code_3: string | null;
    name: string;
};
export type ScriptT = {
    entityType: "script";
    frequency: 1 | 2 | 3 | 4;
    id: number;
    iso_code: string;
    iso_number: string | null;
    name: string;
};
