export type $ReadOnlyArray<T> = readonly T[];
export type $ReadOnly<T> = Readonly<T>;
export type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
export type $Exact<T> = T; // TODO: implement properly
export type $Keys<T> = keyof T;
export type $Values<T> = T[keyof T];
export type $_$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
