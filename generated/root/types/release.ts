// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { MediumWithRecordingsT } from "../../declared-types.js"
import { ScriptT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { MediumT } from "../../declared-types.js"
import { LanguageT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { ArtistCreditRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import { OptionTreeT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type QualityT = -1 | 0 | 1 | 2;
export type ReleaseEventT = {
    country: AreaT | null;
    date: PartialDateT | null;
};
export type ReleaseLabelT = {
    catalogNumber: string | null;
    label: LabelT | null;
    label_id: number | null;
};
export type ReleasePackagingT = OptionTreeT<"release_packaging">;
export type ReleaseStatusT = OptionTreeT<"release_status">;
export type ReleaseT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<ArtistCreditRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"release">, {
    barcode: string | null;
    combined_format_name?: string;
    combined_track_count?: string;
    cover_art_presence: "absent" | "present" | "darkened" | null;
    events?: $ReadOnlyArray<ReleaseEventT>;
    has_no_tracks: boolean;
    labels?: $ReadOnlyArray<ReleaseLabelT>;
    language: LanguageT | null;
    languageID: number | null;
    length?: number;
    may_have_cover_art?: boolean;
    may_have_discids?: boolean;
    mediums?: $ReadOnlyArray<MediumT>;
    packagingID: number | null;
    primaryAlias?: string | null;
    quality: QualityT;
    releaseGroup?: ReleaseGroupT;
    script: ScriptT | null;
    scriptID: number | null;
    status: ReleaseStatusT | null;
    statusID: number | null;
}>>>>>;
export type ReleaseWithMediumsT = $ReadOnly<$_$Spread<ReleaseT, {
    mediums: $ReadOnlyArray<MediumWithRecordingsT>;
}>>;
