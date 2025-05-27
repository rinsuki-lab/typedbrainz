// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { WorkT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { PlaceT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
export type CritiqueBrainzUserT = {
    id: string;
    name: string;
};
export type CritiqueBrainzReviewT = {
    author: CritiqueBrainzUserT;
    body: string;
    created: string;
    id: string;
    rating: number | null;
};
export type ReviewableT = ArtistT | EventT | LabelT | PlaceT | RecordingT | ReleaseGroupT | WorkT;
export type ReviewableRoleT = {
    review_count: number;
};
