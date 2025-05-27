// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { ArtistT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
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
    editsPending?: boolean;
    entityType?: "artist_credit";
    id?: number;
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
