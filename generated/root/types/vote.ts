// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
export type VoteOptionT = -2 | -1 | 0 | 1 | 2 | 3 | 4;
export type VoteT = {
    editor_id: number;
    superseded: boolean;
    vote: VoteOptionT;
    vote_time: string;
};
