// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { GenreT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
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
