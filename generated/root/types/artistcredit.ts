// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { ArtistT } from "../../declared-types.js"
export type ArtistCreditNameT = {
    artist: ArtistT;
    joinPhrase: string;
    name: string;
};
export type ArtistCreditRoleT = {
    artist: string;
    artistCredit: ArtistCreditT;
};
export type ArtistCreditT = {
    editsPending: boolean;
    entityType: "artist_credit";
    id: number;
    names: $ReadOnlyArray<ArtistCreditNameT>;
};
export type IncompleteArtistCreditNameT = {
    artist: ArtistT | null;
    joinPhrase: string;
    name: string;
};
export type IncompleteArtistCreditT = {
    names: $ReadOnlyArray<IncompleteArtistCreditNameT>;
};
