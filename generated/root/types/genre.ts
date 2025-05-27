// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type GenreT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"genre">, {
    primaryAlias: string | null;
}>>>>;
