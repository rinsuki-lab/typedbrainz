// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { GenreT } from "../../declared-types.js"
export type AggregatedTagT = {
    count: number;
    tag: TagT;
};
export type TagT = {
    entityType: "tag";
    genre: GenreT;
    id: number | null;
    name: string;
};
export type UserTagT = {
    count: number;
    tag: TagT;
    vote: 1 | 0 | -1;
};
