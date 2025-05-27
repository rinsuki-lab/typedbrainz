// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type VoteOptionT = -2 | -1 | 0 | 1 | 2 | 3 | 4;
export type VoteT = {
    editor_id: number;
    superseded: boolean;
    vote: VoteOptionT;
    vote_time: string;
};
