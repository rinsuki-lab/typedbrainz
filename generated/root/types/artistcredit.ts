// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
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
