// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EditorT } from "../../declared-types.js"
import { WorkT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { PlaceT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type RatableRoleT = {
    rating: number;
    rating_count: number;
    user_rating: number;
};
export type RatableT = ArtistT | EventT | LabelT | PlaceT | RecordingT | ReleaseGroupT | WorkT;
export type RatableEntityTypeT = "artist" | "event" | "label" | "place" | "recording" | "release_group" | "work";
export type RatingT = {
    editor: EditorT;
    rating: number;
};
