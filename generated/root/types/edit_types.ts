// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EDIT_SET_TRACK_LENGTHS_T } from "../../declared-types.js"
import { EDIT_HISTORIC_SET_TRACK_LENGTHS_FROM_CDTOC_T } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_SET_COVER_ART_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIPS_REORDER_T } from "../../declared-types.js"
import { EDIT_RELEASE_REORDER_MEDIUMS_T } from "../../declared-types.js"
import { EDIT_EVENT_REORDER_EVENT_ART_T } from "../../declared-types.js"
import { EDIT_RELEASE_REORDER_COVER_ART_T } from "../../declared-types.js"
import { EDIT_RELEASE_DELETERELEASELABEL_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_REMOVE_LINK_TYPE_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_REMOVE_LINK_ATTRIBUTE_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_DELETE_T } from "../../declared-types.js"
import { EDIT_MEDIUM_DELETE_T } from "../../declared-types.js"
import { EDIT_WORK_REMOVE_ISWC_T } from "../../declared-types.js"
import { EDIT_RECORDING_REMOVE_ISRC_T } from "../../declared-types.js"
import { EDIT_WORK_DELETE_T } from "../../declared-types.js"
import { EDIT_SERIES_DELETE_T } from "../../declared-types.js"
import { EDIT_RELEASE_DELETE_T } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_DELETE_T } from "../../declared-types.js"
import { EDIT_RECORDING_DELETE_T } from "../../declared-types.js"
import { EDIT_PLACE_DELETE_T } from "../../declared-types.js"
import { EDIT_LABEL_DELETE_T } from "../../declared-types.js"
import { EDIT_INSTRUMENT_DELETE_T } from "../../declared-types.js"
import { EDIT_GENRE_DELETE_T } from "../../declared-types.js"
import { EDIT_EVENT_DELETE_T } from "../../declared-types.js"
import { EDIT_EVENT_REMOVE_EVENT_ART_T } from "../../declared-types.js"
import { EDIT_ARTIST_DELETE_T } from "../../declared-types.js"
import { EDIT_AREA_DELETE_T } from "../../declared-types.js"
import { EDIT_MEDIUM_REMOVE_DISCID_T } from "../../declared-types.js"
import { CDTocT } from "../../declared-types.js"
import { EDIT_RELEASE_REMOVE_COVER_ART_T } from "../../declared-types.js"
import { EDIT_MEDIUM_MOVE_DISCID_T } from "../../declared-types.js"
import { EDIT_WORK_MERGE_T } from "../../declared-types.js"
import { EDIT_SERIES_MERGE_T } from "../../declared-types.js"
import { EDIT_RELEASE_MERGE_T } from "../../declared-types.js"
import { StrOrNum } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_MERGE_T } from "../../declared-types.js"
import { EDIT_RECORDING_MERGE_T } from "../../declared-types.js"
import { RecordingWithArtistCreditT } from "../../declared-types.js"
import { EDIT_PLACE_MERGE_T } from "../../declared-types.js"
import { EDIT_LABEL_MERGE_T } from "../../declared-types.js"
import { EDIT_INSTRUMENT_MERGE_T } from "../../declared-types.js"
import { EDIT_EVENT_MERGE_T } from "../../declared-types.js"
import { EDIT_ARTIST_MERGE_T } from "../../declared-types.js"
import { EDIT_AREA_MERGE_T } from "../../declared-types.js"
import { EDIT_WORK_EDIT_T } from "../../declared-types.js"
import { EDIT_URL_EDIT_T } from "../../declared-types.js"
import { UrlT } from "../../declared-types.js"
import { EDIT_SERIES_EDIT_T } from "../../declared-types.js"
import { EDIT_RELEASE_EDITRELEASELABEL_T } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_EDIT_T } from "../../declared-types.js"
import { EDIT_RELEASE_EDIT_T } from "../../declared-types.js"
import { EDIT_RELEASE_ARTIST_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_EDIT_LINK_TYPE_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_ATTRIBUTE_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_EDIT_T } from "../../declared-types.js"
import { EDIT_RECORDING_EDIT_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_TRACKNAME_T } from "../../declared-types.js"
import { EDIT_HISTORIC_EDIT_TRACK_LENGTH_T } from "../../declared-types.js"
import { EDIT_PLACE_EDIT_T } from "../../declared-types.js"
import { EDIT_MEDIUM_EDIT_T } from "../../declared-types.js"
import { TracklistChangesRemoveT } from "../../declared-types.js"
import { TracklistChangesChangeT } from "../../declared-types.js"
import { TracklistChangesAddT } from "../../declared-types.js"
import { EDIT_LABEL_EDIT_T } from "../../declared-types.js"
import { EDIT_INSTRUMENT_EDIT_T } from "../../declared-types.js"
import { EDIT_GENRE_EDIT_T } from "../../declared-types.js"
import { EDIT_EVENT_EDIT_T } from "../../declared-types.js"
import { EDIT_EVENT_EDIT_EVENT_ART_T } from "../../declared-types.js"
import { EventArtTypeT } from "../../declared-types.js"
import { EDIT_RELEASE_EDIT_COVER_ART_T } from "../../declared-types.js"
import { CoverArtTypeT } from "../../declared-types.js"
import { EDIT_RELEASE_EDIT_BARCODES_T } from "../../declared-types.js"
import { EDIT_ARTIST_EDITCREDIT_T } from "../../declared-types.js"
import { EDIT_ARTIST_EDIT_T } from "../../declared-types.js"
import { EDIT_AREA_EDIT_T } from "../../declared-types.js"
import { EDIT_WORK_EDIT_ALIAS_T } from "../../declared-types.js"
import { WorkAliasT } from "../../declared-types.js"
import { EDIT_SERIES_EDIT_ALIAS_T } from "../../declared-types.js"
import { SeriesAliasT } from "../../declared-types.js"
import { EDIT_RELEASE_EDIT_ALIAS_T } from "../../declared-types.js"
import { ReleaseAliasT } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_EDIT_ALIAS_T } from "../../declared-types.js"
import { ReleaseGroupAliasT } from "../../declared-types.js"
import { EDIT_RECORDING_EDIT_ALIAS_T } from "../../declared-types.js"
import { RecordingAliasT } from "../../declared-types.js"
import { EDIT_PLACE_EDIT_ALIAS_T } from "../../declared-types.js"
import { PlaceAliasT } from "../../declared-types.js"
import { EDIT_LABEL_EDIT_ALIAS_T } from "../../declared-types.js"
import { LabelAliasT } from "../../declared-types.js"
import { EDIT_INSTRUMENT_EDIT_ALIAS_T } from "../../declared-types.js"
import { InstrumentAliasT } from "../../declared-types.js"
import { EDIT_GENRE_EDIT_ALIAS_T } from "../../declared-types.js"
import { GenreAliasT } from "../../declared-types.js"
import { EDIT_EVENT_EDIT_ALIAS_T } from "../../declared-types.js"
import { EventAliasT } from "../../declared-types.js"
import { EDIT_ARTIST_EDIT_ALIAS_T } from "../../declared-types.js"
import { ArtistAliasT } from "../../declared-types.js"
import { EDIT_AREA_EDIT_ALIAS_T } from "../../declared-types.js"
import { AreaAliasT } from "../../declared-types.js"
import { EDIT_WIKIDOC_CHANGE_T } from "../../declared-types.js"
import { EDIT_RELEASE_CHANGE_QUALITY_T } from "../../declared-types.js"
import { QualityT } from "../../declared-types.js"
import { CompT } from "../../declared-types.js"
import { EDIT_WORK_CREATE_T } from "../../declared-types.js"
import { WorkTypeT } from "../../declared-types.js"
import { WorkAttributeT } from "../../declared-types.js"
import { EDIT_RECORDING_CREATE_T } from "../../declared-types.js"
import { EDIT_SERIES_CREATE_T } from "../../declared-types.js"
import { SeriesTypeT } from "../../declared-types.js"
import { SeriesT } from "../../declared-types.js"
import { SeriesOrderingTypeT } from "../../declared-types.js"
import { EDIT_WORK_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_SERIES_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_RELEASE_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_RECORDING_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_PLACE_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_LABEL_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_INSTRUMENT_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_GENRE_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_EVENT_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_ARTIST_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_AREA_DELETE_ALIAS_T } from "../../declared-types.js"
import { EDIT_WORK_ADD_ALIAS_T } from "../../declared-types.js"
import { WorkAliasTypeT } from "../../declared-types.js"
import { EDIT_SERIES_ADD_ALIAS_T } from "../../declared-types.js"
import { SeriesAliasTypeT } from "../../declared-types.js"
import { EDIT_RELEASE_ADD_ALIAS_T } from "../../declared-types.js"
import { ReleaseAliasTypeT } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_ADD_ALIAS_T } from "../../declared-types.js"
import { ReleaseGroupAliasTypeT } from "../../declared-types.js"
import { EDIT_RECORDING_ADD_ALIAS_T } from "../../declared-types.js"
import { RecordingAliasTypeT } from "../../declared-types.js"
import { EDIT_PLACE_ADD_ALIAS_T } from "../../declared-types.js"
import { PlaceAliasTypeT } from "../../declared-types.js"
import { EDIT_LABEL_ADD_ALIAS_T } from "../../declared-types.js"
import { LabelAliasTypeT } from "../../declared-types.js"
import { EDIT_INSTRUMENT_ADD_ALIAS_T } from "../../declared-types.js"
import { InstrumentAliasTypeT } from "../../declared-types.js"
import { EDIT_GENRE_ADD_ALIAS_T } from "../../declared-types.js"
import { GenreAliasTypeT } from "../../declared-types.js"
import { EDIT_EVENT_ADD_ALIAS_T } from "../../declared-types.js"
import { EventAliasTypeT } from "../../declared-types.js"
import { EDIT_ARTIST_ADD_ALIAS_T } from "../../declared-types.js"
import { ArtistAliasTypeT } from "../../declared-types.js"
import { EDIT_AREA_ADD_ALIAS_T } from "../../declared-types.js"
import { AreaAliasTypeT } from "../../declared-types.js"
import { EntityWithAliasesT } from "../../declared-types.js"
import { EntityWithAliasesTypeT } from "../../declared-types.js"
import { EDIT_RELEASE_ADDRELEASELABEL_T } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_CREATE_T } from "../../declared-types.js"
import { ReleaseGroupHistoricTypeT } from "../../declared-types.js"
import { ReleaseGroupTypeT } from "../../declared-types.js"
import { EDIT_RELEASE_CREATE_T } from "../../declared-types.js"
import { ReleaseStatusT } from "../../declared-types.js"
import { ScriptT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { ReleasePackagingT } from "../../declared-types.js"
import { LanguageT } from "../../declared-types.js"
import { ReleaseEventT } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_ADD_TYPE_T } from "../../declared-types.js"
import { LinkTypeT } from "../../declared-types.js"
import { RelatableEntityTypeT } from "../../declared-types.js"
import { LinkTypeAttrTypeT } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_ADD_ATTRIBUTE_T } from "../../declared-types.js"
import { LinkAttrTypeT } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_CREATE_T } from "../../declared-types.js"
import { RelationshipT } from "../../declared-types.js"
import { EDIT_PLACE_CREATE_T } from "../../declared-types.js"
import { PlaceTypeT } from "../../declared-types.js"
import { PlaceT } from "../../declared-types.js"
import { CoordinatesT } from "../../declared-types.js"
import { EDIT_MEDIUM_CREATE_T } from "../../declared-types.js"
import { TrackT } from "../../declared-types.js"
import { MediumFormatT } from "../../declared-types.js"
import { EDIT_LABEL_CREATE_T } from "../../declared-types.js"
import { LabelTypeT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { EDIT_WORK_ADD_ISWCS_T } from "../../declared-types.js"
import { WorkT } from "../../declared-types.js"
import { IswcT } from "../../declared-types.js"
import { EDIT_RECORDING_ADD_ISRCS_T } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { IsrcT } from "../../declared-types.js"
import { EDIT_INSTRUMENT_CREATE_T } from "../../declared-types.js"
import { InstrumentTypeT } from "../../declared-types.js"
import { InstrumentT } from "../../declared-types.js"
import { EDIT_GENRE_CREATE_T } from "../../declared-types.js"
import { GenreT } from "../../declared-types.js"
import { EDIT_EVENT_CREATE_T } from "../../declared-types.js"
import { EventTypeT } from "../../declared-types.js"
import { EDIT_EVENT_ADD_EVENT_ART_T } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { EventArtT } from "../../declared-types.js"
import { EDIT_MEDIUM_ADD_DISCID_T } from "../../declared-types.js"
import { MediumCDTocT } from "../../declared-types.js"
import { MediumT } from "../../declared-types.js"
import { EDIT_RELEASE_ADD_COVER_ART_T } from "../../declared-types.js"
import { ReleaseT } from "../../declared-types.js"
import { ReleaseArtT } from "../../declared-types.js"
import { EDIT_ARTIST_CREATE_T } from "../../declared-types.js"
import { ArtistTypeT } from "../../declared-types.js"
import { GenderT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { EDIT_AREA_CREATE_T } from "../../declared-types.js"
import { AreaTypeT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { EDIT_WORK_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_SERIES_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_RELEASE_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_RECORDING_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_PLACE_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_LABEL_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_INSTRUMENT_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_GENRE_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_EVENT_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_ARTIST_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_AREA_ADD_ANNOTATION_T } from "../../declared-types.js"
import { AnnotatedEntityT } from "../../declared-types.js"
import { AnnotatedEntityTypeT } from "../../declared-types.js"
import { GenericEditT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type AddAnnotationEditGenericT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        [annotatedEntityType: AnnotatedEntityTypeT]: AnnotatedEntityT;
        changelog: string;
        entity_type: AnnotatedEntityTypeT;
        html: string;
        old_annotation?: string;
        text: string;
    };
    edit_type: EDIT_AREA_ADD_ANNOTATION_T;
}>>;
export type AddAreaAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_AREA_ADD_ANNOTATION_T;
}>>;
export type AddArtistAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_ARTIST_ADD_ANNOTATION_T;
}>>;
export type AddEventAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_EVENT_ADD_ANNOTATION_T;
}>>;
export type AddGenreAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_GENRE_ADD_ANNOTATION_T;
}>>;
export type AddInstrumentAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_INSTRUMENT_ADD_ANNOTATION_T;
}>>;
export type AddLabelAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_LABEL_ADD_ANNOTATION_T;
}>>;
export type AddPlaceAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_PLACE_ADD_ANNOTATION_T;
}>>;
export type AddRecordingAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_RECORDING_ADD_ANNOTATION_T;
}>>;
export type AddReleaseGroupAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_RELEASEGROUP_ADD_ANNOTATION_T;
}>>;
export type AddReleaseAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_RELEASE_ADD_ANNOTATION_T;
}>>;
export type AddSeriesAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_SERIES_ADD_ANNOTATION_T;
}>>;
export type AddWorkAnnotationEditT = $ReadOnly<$_$Spread<AddAnnotationEditGenericT, {
    edit_type: EDIT_WORK_ADD_ANNOTATION_T;
}>>;
export type AddAnnotationEditT = AddAreaAnnotationEditT | AddArtistAnnotationEditT | AddEventAnnotationEditT | AddGenreAnnotationEditT | AddInstrumentAnnotationEditT | AddLabelAnnotationEditT | AddPlaceAnnotationEditT | AddRecordingAnnotationEditT | AddReleaseGroupAnnotationEditT | AddReleaseAnnotationEditT | AddSeriesAnnotationEditT | AddWorkAnnotationEditT;
export type AddAreaEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: $_$Spread<DatePeriodRoleT, {
        area: AreaT;
        comment: string | null;
        iso_3166_1: $ReadOnlyArray<string>;
        iso_3166_2: $ReadOnlyArray<string>;
        iso_3166_3: $ReadOnlyArray<string>;
        name: string;
        sort_name: string | null;
        type: AreaTypeT | null;
    }>;
    edit_type: EDIT_AREA_CREATE_T;
}>>;
export type AddArtistEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: $_$Spread<CommentRoleT, $_$Spread<DatePeriodRoleT, {
        area: AreaT | null;
        artist: ArtistT;
        begin_area: AreaT | null;
        end_area: AreaT | null;
        gender: GenderT | null;
        ipi_codes: $ReadOnlyArray<string> | null;
        isni_codes: $ReadOnlyArray<string> | null;
        name: string;
        sort_name: string;
        type: ArtistTypeT | null;
    }>>;
    edit_type: EDIT_ARTIST_CREATE_T;
}>>;
export type AddCoverArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: ReleaseArtT;
        position: number;
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_ADD_COVER_ART_T;
}>>;
export type AddDiscIdEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        medium?: MediumT;
        medium_cdtoc: MediumCDTocT;
    };
    edit_type: EDIT_MEDIUM_ADD_DISCID_T;
}>>;
export type AddEventArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: EventArtT;
        event: EventT;
        position: number;
    };
    edit_type: EDIT_EVENT_ADD_EVENT_ART_T;
}>>;
export type AddEventEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: $_$Spread<CommentRoleT, $_$Spread<DatePeriodRoleT, {
        cancelled: boolean;
        ended: boolean;
        event: EventT;
        name: string;
        setlist: string;
        time: string | null;
        type: EventTypeT | null;
    }>>;
    edit_type: EDIT_EVENT_CREATE_T;
}>>;
export type AddGenreEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: $_$Spread<CommentRoleT, {
        genre: GenreT;
        name: string;
    }>;
    edit_type: EDIT_GENRE_CREATE_T;
}>>;
export type AddInstrumentEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: $_$Spread<DatePeriodRoleT, {
        comment: string | null;
        description: string | null;
        instrument: InstrumentT;
        name: string;
        type: InstrumentTypeT | null;
    }>;
    edit_type: EDIT_INSTRUMENT_CREATE_T;
}>>;
export type AddIsrcsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        additions: $ReadOnlyArray<{
            isrc: IsrcT;
            recording: RecordingT;
        }>;
        client_version?: string;
    };
    edit_type: EDIT_RECORDING_ADD_ISRCS_T;
}>>;
export type AddIswcsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        additions: $ReadOnlyArray<{
            iswc: IswcT;
            work: WorkT;
        }>;
    };
    edit_type: EDIT_WORK_ADD_ISWCS_T;
}>>;
export type AddLabelEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        area: AreaT;
        begin_date: PartialDateT;
        comment: string;
        end_date: PartialDateT;
        ended: boolean;
        ipi_codes: $ReadOnlyArray<string> | null;
        isni_codes: $ReadOnlyArray<string> | null;
        label: LabelT;
        label_code: number | null;
        name: string;
        sort_name: string;
        type: LabelTypeT | null;
    };
    edit_type: EDIT_LABEL_CREATE_T;
}>>;
export type AddMediumEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        format: MediumFormatT | null;
        name?: string;
        position: number | string;
        release?: ReleaseT;
        tracks?: $ReadOnlyArray<TrackT>;
    };
    edit_type: EDIT_MEDIUM_CREATE_T;
}>>;
export type AddPlaceEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: $_$Spread<DatePeriodRoleT, {
        address: string | null;
        area: AreaT;
        comment: string | null;
        coordinates: CoordinatesT | null;
        name?: string;
        place: PlaceT;
        type: PlaceTypeT | null;
    }>;
    edit_type: EDIT_PLACE_CREATE_T;
}>>;
export type AddRelationshipEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        relationship: RelationshipT;
        unknown_attributes: boolean;
    };
    edit_type: EDIT_RELATIONSHIP_CREATE_T;
}>>;
export type AddRelationshipAttributeEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        child_order: number;
        creditable: boolean;
        description: string | null;
        free_text: boolean;
        name: string;
        parent?: LinkAttrTypeT;
    };
    edit_type: EDIT_RELATIONSHIP_ADD_ATTRIBUTE_T;
}>>;
export type AddRelationshipTypeEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        attributes: $ReadOnlyArray<$_$Spread<LinkTypeAttrTypeT, {
            typeName: string;
        }>>;
        child_order: number;
        description: string | null;
        documentation: string | null;
        entity0_cardinality?: number;
        entity0_type: RelatableEntityTypeT;
        entity1_cardinality?: number;
        entity1_type: RelatableEntityTypeT;
        link_phrase: string;
        long_link_phrase: string;
        name: string;
        orderable_direction?: number;
        relationship_type?: LinkTypeT;
        reverse_link_phrase: string;
    };
    edit_type: EDIT_RELATIONSHIP_ADD_TYPE_T;
}>>;
export type AddReleaseEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit: ArtistCreditT;
        barcode: string | null;
        comment: string;
        events?: $ReadOnlyArray<ReleaseEventT>;
        language: LanguageT | null;
        name: string;
        packaging: ReleasePackagingT | null;
        release: ReleaseT;
        release_group: ReleaseGroupT;
        script: ScriptT | null;
        status: ReleaseStatusT | null;
    };
    edit_type: EDIT_RELEASE_CREATE_T;
}>>;
export type AddReleaseGroupEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit: ArtistCreditT;
        comment: string;
        name: string;
        release_group: ReleaseGroupT;
        secondary_types: string;
        type: ReleaseGroupTypeT | ReleaseGroupHistoricTypeT | null;
    };
    edit_type: EDIT_RELEASEGROUP_CREATE_T;
}>>;
export type AddReleaseLabelEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        catalog_number: string;
        label?: LabelT;
        release?: ReleaseT;
    };
    edit_type: EDIT_RELEASE_ADDRELEASELABEL_T;
}>>;
export type AddRemoveAliasEditGenericT<T> = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        [coreEntityType: EntityWithAliasesTypeT]: EntityWithAliasesT;
        alias: string;
        begin_date: PartialDateT;
        end_date: PartialDateT;
        ended?: boolean;
        entity_type: EntityWithAliasesTypeT;
        locale: string | null;
        primary_for_locale: boolean;
        sort_name: string | null;
        type: T | null;
    };
}>>;
export type AddAreaAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<AreaAliasTypeT>, {
    edit_type: EDIT_AREA_ADD_ALIAS_T;
}>>;
export type AddArtistAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<ArtistAliasTypeT>, {
    edit_type: EDIT_ARTIST_ADD_ALIAS_T;
}>>;
export type AddEventAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<EventAliasTypeT>, {
    edit_type: EDIT_EVENT_ADD_ALIAS_T;
}>>;
export type AddGenreAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<GenreAliasTypeT>, {
    edit_type: EDIT_GENRE_ADD_ALIAS_T;
}>>;
export type AddInstrumentAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<InstrumentAliasTypeT>, {
    edit_type: EDIT_INSTRUMENT_ADD_ALIAS_T;
}>>;
export type AddLabelAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<LabelAliasTypeT>, {
    edit_type: EDIT_LABEL_ADD_ALIAS_T;
}>>;
export type AddPlaceAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<PlaceAliasTypeT>, {
    edit_type: EDIT_PLACE_ADD_ALIAS_T;
}>>;
export type AddRecordingAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<RecordingAliasTypeT>, {
    edit_type: EDIT_RECORDING_ADD_ALIAS_T;
}>>;
export type AddReleaseGroupAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<ReleaseGroupAliasTypeT>, {
    edit_type: EDIT_RELEASEGROUP_ADD_ALIAS_T;
}>>;
export type AddReleaseAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<ReleaseAliasTypeT>, {
    edit_type: EDIT_RELEASE_ADD_ALIAS_T;
}>>;
export type AddSeriesAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<SeriesAliasTypeT>, {
    edit_type: EDIT_SERIES_ADD_ALIAS_T;
}>>;
export type AddWorkAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<WorkAliasTypeT>, {
    edit_type: EDIT_WORK_ADD_ALIAS_T;
}>>;
export type RemoveAreaAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<AreaAliasTypeT>, {
    edit_type: EDIT_AREA_DELETE_ALIAS_T;
}>>;
export type RemoveArtistAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<ArtistAliasTypeT>, {
    edit_type: EDIT_ARTIST_DELETE_ALIAS_T;
}>>;
export type RemoveEventAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<EventAliasTypeT>, {
    edit_type: EDIT_EVENT_DELETE_ALIAS_T;
}>>;
export type RemoveGenreAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<GenreAliasTypeT>, {
    edit_type: EDIT_GENRE_DELETE_ALIAS_T;
}>>;
export type RemoveInstrumentAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<InstrumentAliasTypeT>, {
    edit_type: EDIT_INSTRUMENT_DELETE_ALIAS_T;
}>>;
export type RemoveLabelAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<LabelAliasTypeT>, {
    edit_type: EDIT_LABEL_DELETE_ALIAS_T;
}>>;
export type RemovePlaceAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<PlaceAliasTypeT>, {
    edit_type: EDIT_PLACE_DELETE_ALIAS_T;
}>>;
export type RemoveRecordingAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<RecordingAliasTypeT>, {
    edit_type: EDIT_RECORDING_DELETE_ALIAS_T;
}>>;
export type RemoveReleaseGroupAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<ReleaseGroupAliasTypeT>, {
    edit_type: EDIT_RELEASEGROUP_DELETE_ALIAS_T;
}>>;
export type RemoveReleaseAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<ReleaseAliasTypeT>, {
    edit_type: EDIT_RELEASE_DELETE_ALIAS_T;
}>>;
export type RemoveSeriesAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<SeriesAliasTypeT>, {
    edit_type: EDIT_SERIES_DELETE_ALIAS_T;
}>>;
export type RemoveWorkAliasEditT = $ReadOnly<$_$Spread<AddRemoveAliasEditGenericT<WorkAliasTypeT>, {
    edit_type: EDIT_WORK_DELETE_ALIAS_T;
}>>;
export type AddRemoveAliasEditT = AddAreaAliasEditT | AddArtistAliasEditT | AddEventAliasEditT | AddGenreAliasEditT | AddInstrumentAliasEditT | AddLabelAliasEditT | AddPlaceAliasEditT | AddRecordingAliasEditT | AddReleaseGroupAliasEditT | AddReleaseAliasEditT | AddSeriesAliasEditT | AddWorkAliasEditT | RemoveAreaAliasEditT | RemoveArtistAliasEditT | RemoveEventAliasEditT | RemoveGenreAliasEditT | RemoveInstrumentAliasEditT | RemoveLabelAliasEditT | RemovePlaceAliasEditT | RemoveRecordingAliasEditT | RemoveReleaseGroupAliasEditT | RemoveReleaseAliasEditT | RemoveSeriesAliasEditT | RemoveWorkAliasEditT;
export type AddSeriesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        comment: string;
        name: string;
        ordering_type: SeriesOrderingTypeT | null;
        series: SeriesT;
        type: SeriesTypeT | null;
    };
    edit_type: EDIT_SERIES_CREATE_T;
}>>;
export type AddStandaloneRecordingEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit: ArtistCreditT;
        comment: string | null;
        length: number | null;
        name: string;
        recording: RecordingT;
        video: boolean;
    };
    edit_type: EDIT_RECORDING_CREATE_T;
}>>;
export type AddWorkEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        attributes?: {
            [attributeName: string]: $ReadOnlyArray<WorkAttributeT>;
        };
        comment: string;
        iswc: string;
        language?: LanguageT;
        languages?: $ReadOnlyArray<LanguageT>;
        name: string;
        type: WorkTypeT | null;
        work: WorkT;
    };
    edit_type: EDIT_WORK_CREATE_T;
}>>;
export type ChangeReleaseQualityEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        quality: CompT<QualityT>;
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_CHANGE_QUALITY_T;
}>>;
export type ChangeWikiDocEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new_version: number | null;
        old_version: number | null;
        page: string;
    };
    edit_type: EDIT_WIKIDOC_CHANGE_T;
}>>;
export type EditAliasEditGenericT<A, T> = $ReadOnly<$_$Spread<GenericEditT, {
    alias: A | null;
    display_data: {
        [coreEntityType: EntityWithAliasesTypeT]: EntityWithAliasesT;
        alias: CompT<string>;
        begin_date: CompT<PartialDateT>;
        end_date: CompT<PartialDateT>;
        ended: CompT<boolean>;
        entity_type: EntityWithAliasesTypeT;
        locale: CompT<string | null>;
        primary_for_locale: CompT<boolean>;
        sort_name: CompT<string>;
        type: CompT<T | null>;
    };
}>>;
export type EditAreaAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<AreaAliasT, AreaAliasTypeT>, {
    edit_type: EDIT_AREA_EDIT_ALIAS_T;
}>>;
export type EditArtistAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<ArtistAliasT, ArtistAliasTypeT>, {
    edit_type: EDIT_ARTIST_EDIT_ALIAS_T;
}>>;
export type EditEventAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<EventAliasT, EventAliasTypeT>, {
    edit_type: EDIT_EVENT_EDIT_ALIAS_T;
}>>;
export type EditGenreAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<GenreAliasT, GenreAliasTypeT>, {
    edit_type: EDIT_GENRE_EDIT_ALIAS_T;
}>>;
export type EditInstrumentAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<InstrumentAliasT, InstrumentAliasTypeT>, {
    edit_type: EDIT_INSTRUMENT_EDIT_ALIAS_T;
}>>;
export type EditLabelAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<LabelAliasT, LabelAliasTypeT>, {
    edit_type: EDIT_LABEL_EDIT_ALIAS_T;
}>>;
export type EditPlaceAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<PlaceAliasT, PlaceAliasTypeT>, {
    edit_type: EDIT_PLACE_EDIT_ALIAS_T;
}>>;
export type EditRecordingAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<RecordingAliasT, RecordingAliasTypeT>, {
    edit_type: EDIT_RECORDING_EDIT_ALIAS_T;
}>>;
export type EditReleaseGroupAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<ReleaseGroupAliasT, ReleaseGroupAliasTypeT>, {
    edit_type: EDIT_RELEASEGROUP_EDIT_ALIAS_T;
}>>;
export type EditReleaseAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<ReleaseAliasT, ReleaseAliasTypeT>, {
    edit_type: EDIT_RELEASE_EDIT_ALIAS_T;
}>>;
export type EditSeriesAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<SeriesAliasT, SeriesAliasTypeT>, {
    edit_type: EDIT_SERIES_EDIT_ALIAS_T;
}>>;
export type EditWorkAliasEditT = $ReadOnly<$_$Spread<EditAliasEditGenericT<WorkAliasT, WorkAliasTypeT>, {
    edit_type: EDIT_WORK_EDIT_ALIAS_T;
}>>;
export type EditAliasEditT = EditAreaAliasEditT | EditArtistAliasEditT | EditEventAliasEditT | EditGenreAliasEditT | EditInstrumentAliasEditT | EditLabelAliasEditT | EditPlaceAliasEditT | EditRecordingAliasEditT | EditReleaseGroupAliasEditT | EditReleaseAliasEditT | EditSeriesAliasEditT | EditWorkAliasEditT;
export type EditAreaEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        area: AreaT;
        begin_date?: CompT<PartialDateT>;
        comment?: CompT<string | null>;
        end_date?: CompT<PartialDateT>;
        ended?: CompT<boolean>;
        iso_3166_1?: CompT<$ReadOnlyArray<string> | null>;
        iso_3166_2?: CompT<$ReadOnlyArray<string> | null>;
        iso_3166_3?: CompT<$ReadOnlyArray<string> | null>;
        name?: CompT<string>;
        sort_name?: CompT<string>;
        type?: CompT<AreaTypeT | null>;
    };
    edit_type: EDIT_AREA_EDIT_T;
}>>;
export type EditArtistEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        area?: CompT<AreaT | null>;
        artist: ArtistT;
        begin_area?: CompT<AreaT | null>;
        begin_date?: CompT<PartialDateT>;
        comment?: CompT<string | null>;
        end_area?: CompT<AreaT | null>;
        end_date?: CompT<PartialDateT>;
        ended?: CompT<boolean>;
        gender?: CompT<GenderT | null>;
        ipi_codes?: CompT<$ReadOnlyArray<string> | null>;
        isni_codes?: CompT<$ReadOnlyArray<string> | null>;
        name?: CompT<string>;
        sort_name?: CompT<string>;
        type?: CompT<ArtistTypeT | null>;
    };
    edit_type: EDIT_ARTIST_EDIT_T;
}>>;
export type EditArtistCreditEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit: CompT<ArtistCreditT>;
    };
    edit_type: EDIT_ARTIST_EDITCREDIT_T;
}>>;
export type EditBarcodesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        client_version: string | null;
        submissions: $ReadOnlyArray<{
            new_barcode: string | null;
            old_barcode?: string | null;
            release: ReleaseT;
        }>;
    };
    edit_type: EDIT_RELEASE_EDIT_BARCODES_T;
}>>;
export type EditCoverArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: ReleaseArtT;
        comment: CompT<string | null>;
        release: ReleaseT;
        types: CompT<$ReadOnlyArray<CoverArtTypeT>>;
    };
    edit_type: EDIT_RELEASE_EDIT_COVER_ART_T;
}>>;
export type EditEventArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: EventArtT;
        comment: CompT<string | null>;
        event: EventT;
        types: CompT<$ReadOnlyArray<EventArtTypeT>>;
    };
    edit_type: EDIT_EVENT_EDIT_EVENT_ART_T;
}>>;
export type EditEventEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        begin_date?: CompT<PartialDateT | null>;
        cancelled?: CompT<boolean>;
        comment?: CompT<string | null>;
        end_date?: CompT<PartialDateT | null>;
        event: EventT;
        name?: CompT<string>;
        setlist?: CompT<string | null>;
        time?: CompT<string | null>;
        type?: CompT<EventTypeT | null>;
    };
    edit_type: EDIT_EVENT_EDIT_T;
}>>;
export type EditGenreEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        comment?: CompT<string | null>;
        genre: GenreT;
        name?: CompT<string>;
    };
    edit_type: EDIT_GENRE_EDIT_T;
}>>;
export type EditInstrumentEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        comment?: CompT<string | null>;
        description?: CompT<string | null>;
        instrument: InstrumentT;
        name?: CompT<string>;
        type?: CompT<InstrumentTypeT | null>;
    };
    edit_type: EDIT_INSTRUMENT_EDIT_T;
}>>;
export type EditLabelEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        area?: CompT<AreaT | null>;
        begin_date?: CompT<PartialDateT>;
        comment?: CompT<string | null>;
        end_date?: CompT<PartialDateT>;
        ended?: CompT<boolean>;
        ipi_codes?: CompT<$ReadOnlyArray<string> | null>;
        isni_codes?: CompT<$ReadOnlyArray<string> | null>;
        label: LabelT;
        label_code?: CompT<number>;
        name?: CompT<string>;
        sort_name?: CompT<string>;
        type?: CompT<LabelTypeT | null>;
    };
    edit_type: EDIT_LABEL_EDIT_T;
}>>;
export type EditMediumEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit_changes?: $ReadOnlyArray<TracklistChangesAddT | TracklistChangesChangeT>;
        changed_mbids: boolean;
        data_track_changes: boolean;
        format?: CompT<MediumFormatT | null>;
        medium: MediumT;
        name?: CompT<string>;
        position?: CompT<number | string>;
        recording_changes?: $ReadOnlyArray<TracklistChangesAddT | TracklistChangesChangeT>;
        tracklist_changes?: $ReadOnlyArray<TracklistChangesAddT | TracklistChangesChangeT | TracklistChangesRemoveT>;
    };
    edit_type: EDIT_MEDIUM_EDIT_T;
}>>;
export type EditPlaceEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        address?: CompT<string>;
        area?: CompT<AreaT | null>;
        begin_date?: CompT<PartialDateT>;
        comment?: CompT<string>;
        coordinates?: CompT<CoordinatesT | null>;
        end_date?: CompT<PartialDateT>;
        ended?: CompT<boolean>;
        name: CompT<string>;
        place: PlaceT;
        type?: CompT<PlaceTypeT | null>;
    };
    edit_type: EDIT_PLACE_EDIT_T;
}>>;
export type EditRecordingEditGenericT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit?: CompT<ArtistCreditT>;
        comment?: CompT<string | null>;
        length?: CompT<number | null>;
        name?: CompT<string>;
        recording: RecordingT;
        video?: CompT<boolean>;
    };
}>>;
export type EditRecordingEditHistoricLengthT = $ReadOnly<$_$Spread<EditRecordingEditGenericT, {
    edit_type: EDIT_HISTORIC_EDIT_TRACK_LENGTH_T;
}>>;
export type EditRecordingEditHistoricNameT = $ReadOnly<$_$Spread<EditRecordingEditGenericT, {
    edit_type: EDIT_HISTORIC_EDIT_TRACKNAME_T;
}>>;
export type EditRecordingEditCurrentT = $ReadOnly<$_$Spread<EditRecordingEditGenericT, {
    edit_type: EDIT_RECORDING_EDIT_T;
}>>;
export type EditRecordingEditT = EditRecordingEditHistoricLengthT | EditRecordingEditHistoricNameT | EditRecordingEditCurrentT;
export type EditRelationshipEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: RelationshipT;
        old: RelationshipT;
        unknown_attributes: boolean;
    };
    edit_type: EDIT_RELATIONSHIP_EDIT_T;
}>>;
export type EditRelationshipAttributeEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        attribute_type: LinkAttrTypeT | null;
        child_order?: CompT<number>;
        creditable?: CompT<boolean>;
        description?: CompT<string | null>;
        free_text?: CompT<boolean>;
        name?: CompT<string>;
        original_description: string | null;
        original_name: string;
        parent?: CompT<LinkAttrTypeT | null>;
    };
    edit_type: EDIT_RELATIONSHIP_ATTRIBUTE_T;
}>>;
export type EditRelationshipTypeEditDisplayAttributeT = $_$Spread<LinkTypeAttrTypeT, {
    typeName: string;
}>;
export type EditRelationshipTypeEditDisplayExampleT = {
    name: string;
    relationship: RelationshipT;
};
export type EditRelationshipTypeEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        attributes: CompT<$ReadOnlyArray<EditRelationshipTypeEditDisplayAttributeT>>;
        child_order: CompT<number>;
        description?: CompT<string | null>;
        documentation: CompT<string | null>;
        entity0_cardinality?: CompT<number>;
        entity1_cardinality?: CompT<number>;
        examples: CompT<$ReadOnlyArray<EditRelationshipTypeEditDisplayExampleT>>;
        has_dates: CompT<boolean>;
        is_deprecated: CompT<boolean>;
        link_phrase?: CompT<string>;
        long_link_phrase?: CompT<string>;
        name: CompT<string>;
        orderable_direction?: CompT<number>;
        parent?: CompT<LinkTypeT | null>;
        relationship_type: LinkTypeT;
        reverse_link_phrase: CompT<string>;
    };
    edit_type: EDIT_RELATIONSHIP_EDIT_LINK_TYPE_T;
}>>;
export type EditReleaseEditGenericT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit?: CompT<ArtistCreditT>;
        barcode?: CompT<string | null>;
        comment?: CompT<string | null>;
        events?: CompT<$ReadOnlyArray<ReleaseEventT>>;
        language?: CompT<LanguageT | null>;
        name?: CompT<string>;
        packaging?: CompT<ReleasePackagingT | null>;
        release: ReleaseT;
        release_group?: CompT<ReleaseGroupT>;
        script?: CompT<ScriptT | null>;
        status?: CompT<ReleaseStatusT | null>;
        update_tracklists?: boolean;
    };
}>>;
export type EditReleaseEditHistoricArtistT = $ReadOnly<$_$Spread<EditReleaseEditGenericT, {
    edit_type: EDIT_RELEASE_ARTIST_T;
}>>;
export type EditReleaseEditCurrentT = $ReadOnly<$_$Spread<EditReleaseEditGenericT, {
    edit_type: EDIT_RELEASE_EDIT_T;
}>>;
export type EditReleaseEditT = EditReleaseEditHistoricArtistT | EditReleaseEditCurrentT;
export type EditReleaseGroupEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artist_credit?: CompT<ArtistCreditT>;
        comment?: CompT<string | null>;
        name?: CompT<string>;
        release_group: ReleaseGroupT;
        secondary_types: CompT<string>;
        type?: CompT<ReleaseGroupTypeT | ReleaseGroupHistoricTypeT | null>;
    };
    edit_type: EDIT_RELEASEGROUP_EDIT_T;
}>>;
export type EditReleaseLabelEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        barcode: string | null;
        catalog_number: {
            new?: string | null;
            old: string | null;
        };
        combined_format?: string;
        events: $ReadOnlyArray<ReleaseEventT>;
        label: {
            new?: LabelT | null;
            old: LabelT | null;
        };
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_EDITRELEASELABEL_T;
}>>;
export type EditSeriesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        comment?: CompT<string>;
        name?: CompT<string>;
        ordering_type?: CompT<SeriesOrderingTypeT>;
        series: SeriesT;
        type?: CompT<SeriesTypeT>;
    };
    edit_type: EDIT_SERIES_EDIT_T;
}>>;
export type EditUrlEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        affects: number;
        description?: CompT<string | null>;
        isMerge: boolean;
        uri?: CompT<string>;
        url: UrlT;
    };
    edit_type: EDIT_URL_EDIT_T;
}>>;
export type EditWorkEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        attributes?: {
            [attributeName: string]: CompT<$ReadOnlyArray<string>>;
        };
        comment?: CompT<string | null>;
        iswc?: CompT<string | null>;
        languages?: CompT<$ReadOnlyArray<LanguageT>>;
        name?: CompT<string>;
        type?: CompT<WorkTypeT | null>;
        work: WorkT;
    };
    edit_type: EDIT_WORK_EDIT_T;
}>>;
export type MergeAreasEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: AreaT;
        old: $ReadOnlyArray<AreaT>;
    };
    edit_type: EDIT_AREA_MERGE_T;
}>>;
export type MergeArtistsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: ArtistT;
        old: $ReadOnlyArray<ArtistT>;
        rename: boolean;
    };
    edit_type: EDIT_ARTIST_MERGE_T;
}>>;
export type MergeEventsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: EventT;
        old: $ReadOnlyArray<EventT>;
    };
    edit_type: EDIT_EVENT_MERGE_T;
}>>;
export type MergeInstrumentsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: InstrumentT;
        old: $ReadOnlyArray<InstrumentT>;
    };
    edit_type: EDIT_INSTRUMENT_MERGE_T;
}>>;
export type MergeLabelsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: LabelT;
        old: $ReadOnlyArray<LabelT>;
    };
    edit_type: EDIT_LABEL_MERGE_T;
}>>;
export type MergePlacesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: PlaceT;
        old: $ReadOnlyArray<PlaceT>;
    };
    edit_type: EDIT_PLACE_MERGE_T;
}>>;
export type MergeRecordingsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        large_spread: boolean;
        new: RecordingWithArtistCreditT;
        old: $ReadOnlyArray<RecordingWithArtistCreditT>;
    };
    edit_type: EDIT_RECORDING_MERGE_T;
}>>;
export type MergeReleaseGroupsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: ReleaseGroupT;
        old: $ReadOnlyArray<ReleaseGroupT>;
    };
    edit_type: EDIT_RELEASEGROUP_MERGE_T;
}>>;
export type MergeReleaseEditDisplayChangeT = {
    mediums: $ReadOnlyArray<{
        id: number;
        new_name: string;
        new_position: number;
        old_name: string;
        old_position: StrOrNum;
    }>;
    release: ReleaseT;
};
export type MergeReleaseEditDisplayRecordingMergeT = {
    destination: RecordingT;
    large_spread: boolean;
    medium: string;
    sources: $ReadOnlyArray<RecordingT>;
    track: string;
};
export type MergeReleasesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        cannot_merge_recordings_reason?: {
            message: string;
            vars: {
                [var: string]: string;
            };
        };
        changes: $ReadOnlyArray<MergeReleaseEditDisplayChangeT>;
        edit_version: 1 | 2 | 3;
        empty_releases?: $ReadOnlyArray<ReleaseT>;
        merge_strategy: "append" | "merge";
        new: ReleaseT;
        old: $ReadOnlyArray<ReleaseT>;
        recording_merges?: $ReadOnlyArray<MergeReleaseEditDisplayRecordingMergeT>;
    };
    edit_type: EDIT_RELEASE_MERGE_T;
}>>;
export type MergeSeriesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: SeriesT;
        old: $ReadOnlyArray<SeriesT>;
    };
    edit_type: EDIT_SERIES_MERGE_T;
}>>;
export type MergeWorksEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: WorkT;
        old: $ReadOnlyArray<WorkT>;
    };
    edit_type: EDIT_WORK_MERGE_T;
}>>;
export type MoveDiscIdEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        medium_cdtoc: MediumCDTocT;
        new_medium: MediumT;
        old_medium: MediumT;
    };
    edit_type: EDIT_MEDIUM_MOVE_DISCID_T;
}>>;
export type RemoveCoverArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: ReleaseArtT;
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_REMOVE_COVER_ART_T;
}>>;
export type RemoveDiscIdEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        cdtoc: CDTocT;
        medium: MediumT;
    };
    edit_type: EDIT_MEDIUM_REMOVE_DISCID_T;
}>>;
export type RemoveAreaEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: AreaT;
        entity_type: "area";
    };
    edit_type: EDIT_AREA_DELETE_T;
}>>;
export type RemoveArtistEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: ArtistT;
        entity_type: "artist";
    };
    edit_type: EDIT_ARTIST_DELETE_T;
}>>;
export type RemoveEventArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: EventArtT;
        event: EventT;
    };
    edit_type: EDIT_EVENT_REMOVE_EVENT_ART_T;
}>>;
export type RemoveEventEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: EventT;
        entity_type: "event";
    };
    edit_type: EDIT_EVENT_DELETE_T;
}>>;
export type RemoveGenreEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: GenreT;
        entity_type: "genre";
    };
    edit_type: EDIT_GENRE_DELETE_T;
}>>;
export type RemoveInstrumentEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: InstrumentT;
        entity_type: "instrument";
    };
    edit_type: EDIT_INSTRUMENT_DELETE_T;
}>>;
export type RemoveLabelEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: LabelT;
        entity_type: "label";
    };
    edit_type: EDIT_LABEL_DELETE_T;
}>>;
export type RemovePlaceEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: PlaceT;
        entity_type: "place";
    };
    edit_type: EDIT_PLACE_DELETE_T;
}>>;
export type RemoveRecordingEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: RecordingT;
        entity_type: "recording";
    };
    edit_type: EDIT_RECORDING_DELETE_T;
}>>;
export type RemoveReleaseGroupEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: ReleaseGroupT;
        entity_type: "release_group";
    };
    edit_type: EDIT_RELEASEGROUP_DELETE_T;
}>>;
export type RemoveReleaseEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: ReleaseT;
        entity_type: "release";
    };
    edit_type: EDIT_RELEASE_DELETE_T;
}>>;
export type RemoveSeriesEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: SeriesT;
        entity_type: "series";
    };
    edit_type: EDIT_SERIES_DELETE_T;
}>>;
export type RemoveWorkEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        entity: WorkT;
        entity_type: "work";
    };
    edit_type: EDIT_WORK_DELETE_T;
}>>;
export type RemoveEntityEditT = RemoveAreaEditT | RemoveArtistEditT | RemoveEventEditT | RemoveGenreEditT | RemoveInstrumentEditT | RemoveLabelEditT | RemovePlaceEditT | RemoveRecordingEditT | RemoveReleaseGroupEditT | RemoveReleaseEditT | RemoveSeriesEditT | RemoveWorkEditT;
export type RemoveIsrcEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        isrc: IsrcT;
    };
    edit_type: EDIT_RECORDING_REMOVE_ISRC_T;
}>>;
export type RemoveIswcEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        iswc: IswcT;
    };
    edit_type: EDIT_WORK_REMOVE_ISWC_T;
}>>;
export type RemoveMediumEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        medium: MediumT;
        tracks?: $ReadOnlyArray<TrackT>;
    };
    edit_type: EDIT_MEDIUM_DELETE_T;
}>>;
export type RemoveRelationshipEditT = $ReadOnly<$_$Spread<GenericEditT, {
    data: {
        edit_version?: number;
        relationship: {
            entity0: {
                gid?: string;
                id: number;
                name: string;
            };
            entity0_credit?: string;
            entity1: {
                gid?: string;
                id: number;
                name: string;
            };
            entity1_credit?: string;
            extra_phrase_attributes?: string;
            id: number;
            link: {
                attributes?: $ReadOnlyArray<{
                    credited_as?: string;
                    gid?: string;
                    id?: string | number;
                    name?: string;
                    root_gid?: string;
                    root_id?: string | number;
                    root_name?: string;
                    text_value?: string;
                    type?: {
                        gid: string;
                        id: string | number;
                        name: string;
                        root: {
                            gid: string;
                            id: string | number;
                            name: string;
                        };
                    };
                }>;
                begin_date: {
                    day: number | null;
                    month: number | null;
                    year: string | number | null;
                };
                end_date: {
                    day: number | null;
                    month: number | null;
                    year: string | number | null;
                };
                ended?: string;
                type: {
                    entity0_type: string;
                    entity1_type: string;
                    id?: string | number;
                    long_link_phrase?: string;
                };
            };
            phrase?: string;
        };
    };
    display_data: {
        relationship: RelationshipT;
    };
    edit_type: EDIT_RELATIONSHIP_DELETE_T;
}>>;
export type RemoveRelationshipAttributeEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        description: string | null;
        name: string;
    };
    edit_type: EDIT_RELATIONSHIP_REMOVE_LINK_ATTRIBUTE_T;
}>>;
export type RemoveRelationshipTypeEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        attributes: $ReadOnlyArray<$_$Spread<LinkTypeAttrTypeT, {
            typeName: string;
        }>>;
        description: string | null;
        entity0_type: RelatableEntityTypeT;
        entity1_type: RelatableEntityTypeT;
        link_phrase: string;
        long_link_phrase: string;
        name: string;
        reverse_link_phrase: string;
    };
    edit_type: EDIT_RELATIONSHIP_REMOVE_LINK_TYPE_T;
}>>;
export type RemoveReleaseLabelEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        catalog_number: string;
        label?: LabelT;
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_DELETERELEASELABEL_T;
}>>;
export type ReorderCoverArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        new: $ReadOnlyArray<ReleaseArtT>;
        old: $ReadOnlyArray<ReleaseArtT>;
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_REORDER_COVER_ART_T;
}>>;
export type ReorderEventArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        event: EventT;
        new: $ReadOnlyArray<EventArtT>;
        old: $ReadOnlyArray<EventArtT>;
    };
    edit_type: EDIT_EVENT_REORDER_EVENT_ART_T;
}>>;
export type ReorderMediumsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        mediums: $ReadOnlyArray<{
            new: number;
            old: "new" | number;
            title: string;
        }>;
        release: ReleaseT;
    };
    edit_type: EDIT_RELEASE_REORDER_MEDIUMS_T;
}>>;
export type ReorderRelationshipsEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        relationships: $ReadOnlyArray<{
            new_order: number;
            old_order: number;
            relationship: RelationshipT;
        }>;
    };
    edit_type: EDIT_RELATIONSHIPS_REORDER_T;
}>>;
export type SetCoverArtEditT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        artwork: CompT<ReleaseArtT>;
        isOldArtworkAutomatic: boolean;
        release_group: ReleaseGroupT;
    };
    edit_type: EDIT_RELEASEGROUP_SET_COVER_ART_T;
}>>;
export type SetTrackLengthsEditGenericT = $ReadOnly<$_$Spread<GenericEditT, {
    display_data: {
        cdtoc: CDTocT | null;
        length: CompT<$ReadOnlyArray<number | null>>;
        medium?: MediumT;
        releases: $ReadOnlyArray<ReleaseT>;
    };
}>>;
export type SetTrackLengthsEditHistoricT = $ReadOnly<$_$Spread<SetTrackLengthsEditGenericT, {
    edit_type: EDIT_HISTORIC_SET_TRACK_LENGTHS_FROM_CDTOC_T;
}>>;
export type SetTrackLengthsEditStandardT = $ReadOnly<$_$Spread<SetTrackLengthsEditGenericT, {
    edit_type: EDIT_SET_TRACK_LENGTHS_T;
}>>;
export type SetTrackLengthsEditT = SetTrackLengthsEditHistoricT | SetTrackLengthsEditStandardT;
export type CurrentEditT = AddAnnotationEditT | AddAreaEditT | AddArtistEditT | AddCoverArtEditT | AddDiscIdEditT | AddEventArtEditT | AddEventEditT | AddGenreEditT | AddInstrumentEditT | AddIsrcsEditT | AddIswcsEditT | AddLabelEditT | AddMediumEditT | AddPlaceEditT | AddRelationshipEditT | AddRelationshipAttributeEditT | AddRelationshipTypeEditT | AddReleaseEditT | AddReleaseGroupEditT | AddReleaseLabelEditT | AddRemoveAliasEditT | AddSeriesEditT | AddStandaloneRecordingEditT | AddWorkEditT | ChangeReleaseQualityEditT | ChangeWikiDocEditT | EditAliasEditT | EditAreaEditT | EditArtistEditT | EditArtistCreditEditT | EditBarcodesEditT | EditCoverArtEditT | EditEventArtEditT | EditEventEditT | EditGenreEditT | EditInstrumentEditT | EditLabelEditT | EditMediumEditT | EditPlaceEditT | EditRecordingEditT | EditRelationshipEditT | EditRelationshipAttributeEditT | EditRelationshipTypeEditT | EditReleaseEditT | EditReleaseGroupEditT | EditReleaseLabelEditT | EditSeriesEditT | EditUrlEditT | EditWorkEditT | MergeAreasEditT | MergeArtistsEditT | MergeEventsEditT | MergeInstrumentsEditT | MergeLabelsEditT | MergePlacesEditT | MergeRecordingsEditT | MergeReleaseGroupsEditT | MergeReleasesEditT | MergeSeriesEditT | MergeWorksEditT | MoveDiscIdEditT | RemoveCoverArtEditT | RemoveDiscIdEditT | RemoveEventArtEditT | RemoveEntityEditT | RemoveIsrcEditT | RemoveIswcEditT | RemoveMediumEditT | RemoveRelationshipEditT | RemoveRelationshipAttributeEditT | RemoveRelationshipTypeEditT | RemoveReleaseLabelEditT | ReorderCoverArtEditT | ReorderEventArtEditT | ReorderMediumsEditT | ReorderRelationshipsEditT | SetCoverArtEditT | SetTrackLengthsEditT;
