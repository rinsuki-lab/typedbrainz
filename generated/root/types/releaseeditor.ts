// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { LabelT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { StrOrNum } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type ReleaseEditorSeededArtistCreditNameT = {
    artist?: ArtistT | {
        name?: string;
    } | null;
    joinPhrase: string;
    name: string;
};
export type ReleaseEditorSeededArtistCreditT = {
    names: $ReadOnlyArray<ReleaseEditorSeededArtistCreditNameT | {}> | null;
};
export type ReleaseEditorSeededTrackT = {
    artistCredit?: ReleaseEditorSeededArtistCreditT | null;
    length?: number;
    name?: string;
    number: StrOrNum;
    position: number;
    recording?: RecordingT;
};
export type ReleaseEditorSeededMediumT = {
    format_id?: number;
    name?: string;
    toc?: string;
    tracks?: $ReadOnlyArray<ReleaseEditorSeededTrackT | {}> | null;
};
export type ReleaseEditorSeededReleaseGroupT = ReleaseGroupT | {
    name: string;
    secondaryTypeIDs?: $ReadOnlyArray<number>;
    typeID?: number;
};
export type ReleaseEditorSeededReleaseEventT = {
    country?: AreaT;
    date?: {
        day?: number;
        month?: number;
        year?: number;
    };
};
export type ReleaseEditorSeededReleaseLabelT = {
    catalogNumber: string;
    label?: LabelT | {
        name: string;
    };
};
export type ReleaseEditorSeededUrlRelationshipT = {
    id: null;
    linkTypeID?: number;
    target: {
        entityType: "url";
        name: string;
    };
};
export type ReleaseEditorSeededReleaseT = {
    annotation?: string;
    artistCredit?: ReleaseEditorSeededArtistCreditT | null;
    barcode?: string;
    comment?: string;
    events?: $ReadOnlyArray<ReleaseEditorSeededReleaseEventT | {}> | null;
    labels?: $ReadOnlyArray<ReleaseEditorSeededReleaseLabelT | {}> | null;
    languageID?: number;
    mediums?: $ReadOnlyArray<ReleaseEditorSeededMediumT> | null;
    name?: string;
    packagingID?: number;
    relationships?: $ReadOnlyArray<ReleaseEditorSeededUrlRelationshipT | {}> | null;
    releaseGroup?: ReleaseEditorSeededReleaseGroupT | null;
    scriptID?: number;
    statusID?: number;
};
export type ReleaseEditorSeedT = {
    errors: $ReadOnlyArray<string>;
    seed: ReleaseEditorSeededReleaseT;
};
