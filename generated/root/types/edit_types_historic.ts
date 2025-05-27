// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
import { EDIT_HISTORIC_REMOVE_TRACK_T } from "../../declared-types.js"
import { EDIT_HISTORIC_REMOVE_RELEASES_T } from "../../declared-types.js"
import { EDIT_HISTORIC_REMOVE_RELEASE_T } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { EDIT_HISTORIC_REMOVE_LINK_T } from "../../declared-types.js"
import { EDIT_HISTORIC_REMOVE_LABEL_ALIAS_T } from "../../declared-types.js"
import { EDIT_HISTORIC_REMOVE_DISCID_T } from "../../declared-types.js"
import { EDIT_RELEASE_MOVE_T } from "../../declared-types.js"
import { EDIT_HISTORIC_MOVE_RELEASE_T } from "../../declared-types.js"
import { EDIT_HISTORIC_MOVE_DISCID_T } from "../../declared-types.js"
import { EDIT_HISTORIC_MERGE_RELEASE_MAC_T } from "../../declared-types.js"
import { EDIT_HISTORIC_MERGE_RELEASE_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_TRACKNUM_T } from "../../declared-types.js"
import { EDIT_HISTORIC_CHANGE_TRACK_ARTIST_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_RELEASE_NAME_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_RELEASE_LANGUAGE_T } from "../../declared-types.js"
import { EDIT_HISTORIC_REMOVE_RELEASE_EVENTS_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_RELEASE_EVENTS_OLD_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_RELEASE_EVENTS_T } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_RELEASE_EVENTS_T } from "../../declared-types.js"
import { OldReleaseEventCompT } from "../../declared-types.js"
import { OldReleaseEventT } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_RELEASE_ATTRS_T } from "../../declared-types.js"
import { ReleaseGroupHistoricTypeT } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_LINK_T } from "../../declared-types.js"
import { EDIT_HISTORIC_CHANGE_RELEASE_QUALITY_T } from "../../declared-types.js"
import { EDIT_HISTORIC_CHANGE_RELEASE_GROUP_T } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { EDIT_HISTORIC_SAC_TO_MAC_T } from "../../declared-types.js"
import { EDIT_HISTORIC_MAC_TO_SAC_T } from "../../declared-types.js"
import { EDIT_HISTORIC_CHANGE_ARTIST_QUALITY_T } from "../../declared-types.js"
import { QualityT } from "../../declared-types.js"
import { CompT } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_TRACK_T } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_TRACK_KV_T } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_RELEASE_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_RELEASE_T } from "../../declared-types.js"
import { ReleaseGroupTypeT } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { ReleaseStatusT } from "../../declared-types.js"
import { ScriptT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { MediumFormatT } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { LanguageT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_LINK_T } from "../../declared-types.js"
import { RelationshipT } from "../../declared-types.js"
import { EDIT_HISTORIC_ADD_DISCID_T } from "../../declared-types.js"
import { ReleaseT } from "../../declared-types.js"
import { CDTocT } from "../../declared-types.js"
import { GenericEditT } from "../../declared-types.js"
export type AddDiscIdHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        cdtoc: CDTocT;
        full_toc: string;
        releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_ADD_DISCID_T;
}>;
export type AddRelationshipHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        relationships: $ReadOnlyArray<RelationshipT>;
    };
    edit_type: EDIT_HISTORIC_ADD_LINK_T;
}>;
export type AddReleaseHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        artist: ArtistT;
        language: LanguageT | null;
        name: string;
        release_events: $ReadOnlyArray<{
            barcode: number;
            catalog_number: string | null;
            country: AreaT | null;
            date: PartialDateT | null;
            format: MediumFormatT | null;
            label: LabelT | null;
        }>;
        releases: $ReadOnlyArray<ReleaseT | null>;
        script: ScriptT | null;
        status: ReleaseStatusT | null;
        tracks: $ReadOnlyArray<{
            artist: ArtistT;
            length: number | null;
            name: string;
            position: number;
            recording: RecordingT;
        }>;
        type: ReleaseGroupTypeT | null;
    };
    edit_type: EDIT_HISTORIC_ADD_RELEASE_T;
}>;
export type AddReleaseAnnotationHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        changelog: string;
        html: string;
        releases: $ReadOnlyArray<ReleaseT>;
        text: string;
    };
    edit_type: EDIT_HISTORIC_ADD_RELEASE_ANNOTATION_T;
}>;
export type AddTrackKVHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        artist: ArtistT;
        length: number;
        name: string;
        position: number;
        recording: RecordingT;
        releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_ADD_TRACK_KV_T;
}>;
export type AddTrackOldHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        artist_name: string;
        name: string;
        position: number;
        releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_ADD_TRACK_T;
}>;
export type ChangeArtistQualityHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        artist: ArtistT;
        quality: CompT<QualityT>;
    };
    edit_type: EDIT_HISTORIC_CHANGE_ARTIST_QUALITY_T;
}>;
export type ChangeReleaseArtistHistoricEditGenericT = $ReadOnly<GenericEditT & {
    display_data: {
        artist: CompT<ArtistT>;
        releases: $ReadOnlyArray<ReleaseT>;
    };
}>;
export type ChangeReleaseArtistHistoricEditMACToSACT = $ReadOnly<ChangeReleaseArtistHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_MAC_TO_SAC_T;
}>;
export type ChangeReleaseArtistHistoricEditSACToMACT = $ReadOnly<ChangeReleaseArtistHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_SAC_TO_MAC_T;
}>;
export type ChangeReleaseArtistHistoricEditT = ChangeReleaseArtistHistoricEditMACToSACT | ChangeReleaseArtistHistoricEditSACToMACT;
export type ChangeReleaseGroupHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        release_group: CompT<ReleaseGroupT>;
        releases: $ReadOnlyArray<ReleaseT>;
    };
    edit_type: EDIT_HISTORIC_CHANGE_RELEASE_GROUP_T;
}>;
export type ChangeReleaseQualityHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        changes: $ReadOnlyArray<{
            quality: CompT<QualityT>;
            releases: $ReadOnlyArray<ReleaseT>;
        }>;
    };
    edit_type: EDIT_HISTORIC_CHANGE_RELEASE_QUALITY_T;
}>;
export type EditRelationshipHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        relationship: CompT<$ReadOnlyArray<RelationshipT>>;
    };
    edit_type: EDIT_HISTORIC_EDIT_LINK_T;
}>;
export type EditReleaseAttributesHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        changes: $ReadOnlyArray<{
            releases: $ReadOnlyArray<ReleaseT | null>;
            status: ReleaseStatusT | null;
            type: ReleaseGroupTypeT | ReleaseGroupHistoricTypeT | null;
        }>;
        status: ReleaseStatusT | null;
        type: ReleaseGroupTypeT | ReleaseGroupHistoricTypeT | null;
    };
    edit_type: EDIT_HISTORIC_EDIT_RELEASE_ATTRS_T;
}>;
export type EditReleaseEventsHistoricEditGenericT = $ReadOnly<GenericEditT & {
    display_data: {
        additions: $ReadOnlyArray<OldReleaseEventT>;
        edits: $ReadOnlyArray<OldReleaseEventCompT>;
        removals: $ReadOnlyArray<OldReleaseEventT>;
    };
    edit_type: EDIT_HISTORIC_ADD_RELEASE_EVENTS_T | EDIT_HISTORIC_EDIT_RELEASE_EVENTS_T | EDIT_HISTORIC_EDIT_RELEASE_EVENTS_OLD_T | EDIT_HISTORIC_REMOVE_RELEASE_EVENTS_T;
}>;
export type AddReleaseEventsHistoricEditT = $ReadOnly<EditReleaseEventsHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_ADD_RELEASE_EVENTS_T;
}>;
export type EditReleaseEventsHistoricEditNewerT = $ReadOnly<EditReleaseEventsHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_EDIT_RELEASE_EVENTS_T;
}>;
export type EditReleaseEventsHistoricEditOlderT = $ReadOnly<EditReleaseEventsHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_EDIT_RELEASE_EVENTS_OLD_T;
}>;
export type RemoveReleaseEventsHistoricEditT = $ReadOnly<EditReleaseEventsHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_REMOVE_RELEASE_EVENTS_T;
}>;
export type EditReleaseEventsHistoricEditT = AddReleaseEventsHistoricEditT | EditReleaseEventsHistoricEditNewerT | EditReleaseEventsHistoricEditOlderT | RemoveReleaseEventsHistoricEditT;
export type EditReleaseLanguageHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        language: LanguageT | null;
        old: $ReadOnlyArray<{
            language: LanguageT | null;
            releases: $ReadOnlyArray<ReleaseT | null>;
            script: ScriptT | null;
        }>;
        script: ScriptT | null;
    };
    edit_type: EDIT_HISTORIC_EDIT_RELEASE_LANGUAGE_T;
}>;
export type EditReleaseNameHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        name: CompT<string>;
        releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_EDIT_RELEASE_NAME_T;
}>;
export type EditTrackHistoricEditGenericT = $ReadOnly<GenericEditT & {
    display_data: {
        artist: CompT<ArtistT>;
        position: CompT<number>;
        recording: RecordingT;
    };
}>;
export type EditTrackHistoricEditArtistT = $ReadOnly<EditTrackHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_CHANGE_TRACK_ARTIST_T;
}>;
export type EditTrackHistoricEditNumberT = $ReadOnly<EditTrackHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_EDIT_TRACKNUM_T;
}>;
export type EditTrackHistoricEditT = EditTrackHistoricEditArtistT | EditTrackHistoricEditNumberT;
export type MergeReleasesHistoricEditGenericT = $ReadOnly<GenericEditT & {
    display_data: {
        merge_attributes: boolean;
        merge_language: boolean;
        releases: {
            new: $ReadOnlyArray<ReleaseT>;
            old: $ReadOnlyArray<ReleaseT>;
        };
    };
}>;
export type MergeReleasesHistoricEditReleaseT = $ReadOnly<MergeReleasesHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_MERGE_RELEASE_T;
}>;
export type MergeReleasesHistoricEditMACT = $ReadOnly<MergeReleasesHistoricEditGenericT & {
    edit_type: EDIT_HISTORIC_MERGE_RELEASE_MAC_T;
}>;
export type MergeReleasesHistoricEditT = MergeReleasesHistoricEditReleaseT | MergeReleasesHistoricEditMACT;
export type MoveDiscIdHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        cdtoc: CDTocT;
        new_releases: $ReadOnlyArray<ReleaseT | null>;
        old_releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_MOVE_DISCID_T;
}>;
export type MoveReleaseHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        artist: CompT<ArtistT>;
        move_tracks: boolean;
        releases: $ReadOnlyArray<ReleaseT>;
    };
    edit_type: EDIT_HISTORIC_MOVE_RELEASE_T;
}>;
export type MoveReleaseToReleaseGroupHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        release: ReleaseT;
        release_group: CompT<ReleaseGroupT>;
    };
    edit_type: EDIT_RELEASE_MOVE_T;
}>;
export type RemoveDiscIdHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        cdtoc: {
            discid: string;
            entityType: "cdtoc";
        };
        releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_REMOVE_DISCID_T;
}>;
export type RemoveLabelAliasHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        alias: string;
    };
    edit_type: EDIT_HISTORIC_REMOVE_LABEL_ALIAS_T;
}>;
export type RemoveRelationshipHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        relationships: $ReadOnlyArray<RelationshipT>;
    };
    edit_type: EDIT_HISTORIC_REMOVE_LINK_T;
}>;
export type RemoveReleaseHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        artist_credit: ArtistCreditT;
        name: string;
        releases: $ReadOnlyArray<ReleaseT>;
    };
    edit_type: EDIT_HISTORIC_REMOVE_RELEASE_T;
}>;
export type RemoveReleasesHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        releases: $ReadOnlyArray<ReleaseT>;
    };
    edit_type: EDIT_HISTORIC_REMOVE_RELEASES_T;
}>;
export type RemoveTrackHistoricEditT = $ReadOnly<GenericEditT & {
    display_data: {
        name: string;
        recording: RecordingT;
        releases: $ReadOnlyArray<ReleaseT | null>;
    };
    edit_type: EDIT_HISTORIC_REMOVE_TRACK_T;
}>;
export type HistoricEditT = AddDiscIdHistoricEditT | AddRelationshipHistoricEditT | AddReleaseHistoricEditT | AddReleaseAnnotationHistoricEditT | AddTrackKVHistoricEditT | AddTrackOldHistoricEditT | ChangeArtistQualityHistoricEditT | ChangeReleaseArtistHistoricEditT | ChangeReleaseGroupHistoricEditT | ChangeReleaseQualityHistoricEditT | EditRelationshipHistoricEditT | EditReleaseAttributesHistoricEditT | EditReleaseEventsHistoricEditT | EditReleaseLanguageHistoricEditT | EditReleaseNameHistoricEditT | EditTrackHistoricEditT | MergeReleasesHistoricEditT | MoveDiscIdHistoricEditT | MoveReleaseHistoricEditT | MoveReleaseToReleaseGroupHistoricEditT | RemoveDiscIdHistoricEditT | RemoveLabelAliasHistoricEditT | RemoveRelationshipHistoricEditT | RemoveReleaseHistoricEditT | RemoveReleasesHistoricEditT | RemoveTrackHistoricEditT;
