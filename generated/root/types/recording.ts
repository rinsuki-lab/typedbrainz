// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { ReleaseGroupT } from "../../declared-types.js"
import { IsrcT } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { AppearancesT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type RecordingT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"recording">, $_$Spread<RatableRoleT, $_$Spread<ReviewableRoleT, {
    appearsOn?: AppearancesT<{
        gid: string;
        name: string;
    }>;
    artist?: string;
    artistCredit: ArtistCreditT;
    first_release_date?: PartialDateT;
    isrcs: $ReadOnlyArray<IsrcT>;
    length: number;
    primaryAlias?: string | null;
    related_works: $ReadOnlyArray<number>;
    video: boolean;
}>>>>>>;
export type ReleaseGroupAppearancesT = {
    hits: number;
    results: $ReadOnlyArray<ReleaseGroupT>;
};
export type ReleaseGroupAppearancesMapT = {
    [recordingId: number]: ReleaseGroupAppearancesT;
};
