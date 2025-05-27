// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { ArtistCreditT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../../../src/type-utils.js";
import type { Observable as KnockoutObservable } from "knockout";
export type ReleaseEditorTrackT = {
    artistCredit: KnockoutObservable<ArtistCreditT>;
    entityType: "track";
    gid: string;
    id: number;
    name: KnockoutObservable<string>;
    next: "TODO: Support TypeNode FunctionTypeAnnotation";
    previous: "TODO: Support TypeNode FunctionTypeAnnotation";
};
