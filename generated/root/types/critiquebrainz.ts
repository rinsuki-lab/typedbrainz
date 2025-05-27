// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { WorkT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { PlaceT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
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
    review_count?: number;
};
