// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { WorkTypeT } from "../../../../declared-types.js"
import { WorkAttributeTypeT } from "../../../../declared-types.js"
import { WorkAliasTypeT } from "../../../../declared-types.js"
import { WorkT } from "../../../../declared-types.js"
import { UrlT } from "../../../../declared-types.js"
import { SeriesTypeT } from "../../../../declared-types.js"
import { SeriesOrderingTypeT } from "../../../../declared-types.js"
import { SeriesAliasTypeT } from "../../../../declared-types.js"
import { SeriesT } from "../../../../declared-types.js"
import { ScriptT } from "../../../../declared-types.js"
import { ReleaseStatusT } from "../../../../declared-types.js"
import { ReleasePackagingT } from "../../../../declared-types.js"
import { ReleaseGroupSecondaryTypeT } from "../../../../declared-types.js"
import { ReleaseGroupTypeT } from "../../../../declared-types.js"
import { ReleaseGroupAliasTypeT } from "../../../../declared-types.js"
import { ReleaseGroupT } from "../../../../declared-types.js"
import { ReleaseAliasTypeT } from "../../../../declared-types.js"
import { ReleaseT } from "../../../../declared-types.js"
import { RecordingAliasTypeT } from "../../../../declared-types.js"
import { RecordingT } from "../../../../declared-types.js"
import { PlaceTypeT } from "../../../../declared-types.js"
import { PlaceAliasTypeT } from "../../../../declared-types.js"
import { PlaceT } from "../../../../declared-types.js"
import { LinkTypeT } from "../../../../declared-types.js"
import { LinkAttrTypeT } from "../../../../declared-types.js"
import { StrOrNum } from "../../../../declared-types.js"
import { LanguageT } from "../../../../declared-types.js"
import { LabelTypeT } from "../../../../declared-types.js"
import { LabelAliasTypeT } from "../../../../declared-types.js"
import { LabelT } from "../../../../declared-types.js"
import { InstrumentTypeT } from "../../../../declared-types.js"
import { InstrumentAliasTypeT } from "../../../../declared-types.js"
import { InstrumentT } from "../../../../declared-types.js"
import { GenreAliasTypeT } from "../../../../declared-types.js"
import { GenreT } from "../../../../declared-types.js"
import { EventTypeT } from "../../../../declared-types.js"
import { EventAliasTypeT } from "../../../../declared-types.js"
import { EventT } from "../../../../declared-types.js"
import { EditorT } from "../../../../declared-types.js"
import { EditWithIdT } from "../../../../declared-types.js"
import { CollectionTypeT } from "../../../../declared-types.js"
import { ArtistTypeT } from "../../../../declared-types.js"
import { ArtistAliasTypeT } from "../../../../declared-types.js"
import { ArtistT } from "../../../../declared-types.js"
import { AreaTypeT } from "../../../../declared-types.js"
import { AreaAliasTypeT } from "../../../../declared-types.js"
import { AreaT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
import isObjectEmpty from "./utility/isObjectEmpty.js";
export type LinkedEntitiesT = {
    area: {
        [areaId: number]: AreaT;
    };
    area_alias_type: {
        [typeId: number]: AreaAliasTypeT;
    };
    area_type: {
        [areaTypeId: number]: AreaTypeT;
    };
    artist: {
        [artistId: number]: ArtistT;
    };
    artist_alias_type: {
        [typeId: number]: ArtistAliasTypeT;
    };
    artist_type: {
        [artistId: number]: ArtistTypeT;
    };
    collection_type: {
        [collectionTypeId: number]: CollectionTypeT;
    };
    edit: {
        [editId: number]: EditWithIdT;
    };
    editor: {
        [editorId: number]: EditorT;
    };
    event: {
        [eventId: number]: EventT;
    };
    event_alias_type: {
        [typeId: number]: EventAliasTypeT;
    };
    event_type: {
        [eventTypeId: number]: EventTypeT;
    };
    genre: {
        [genreId: number]: GenreT;
    };
    genre_alias_type: {
        [typeId: number]: GenreAliasTypeT;
    };
    instrument: {
        [instrumentId: number]: InstrumentT;
    };
    instrument_alias_type: {
        [typeId: number]: InstrumentAliasTypeT;
    };
    instrument_type: {
        [instrumentTypeId: number]: InstrumentTypeT;
    };
    label: {
        [labelId: number]: LabelT;
    };
    label_alias_type: {
        [typeId: number]: LabelAliasTypeT;
    };
    label_type: {
        [labelTypeId: number]: LabelTypeT;
    };
    language: {
        [languageId: number]: LanguageT;
    };
    link_attribute_type: {
        [linkAttributeTypeIdOrGid: StrOrNum]: LinkAttrTypeT;
    };
    link_type: {
        [linkTypeIdOrGid: StrOrNum]: LinkTypeT;
    };
    link_type_tree: {
        [entityTypes: string]: Array<LinkTypeT>;
    };
    place: {
        [placeId: number]: PlaceT;
    };
    place_alias_type: {
        [typeId: number]: PlaceAliasTypeT;
    };
    place_type: {
        [placeTypeId: number]: PlaceTypeT;
    };
    recording: {
        [recordingId: number]: RecordingT;
    };
    recording_alias_type: {
        [typeId: number]: RecordingAliasTypeT;
    };
    release: {
        [releaseId: number]: ReleaseT;
    };
    release_alias_type: {
        [typeId: number]: ReleaseAliasTypeT;
    };
    release_group: {
        [releaseGroupId: number]: ReleaseGroupT;
    };
    release_group_alias_type: {
        [typeId: number]: ReleaseGroupAliasTypeT;
    };
    release_group_primary_type: {
        [releaseGroupPrimaryTypeId: number]: ReleaseGroupTypeT;
    };
    release_group_secondary_type: {
        [releaseGroupSecondaryTypeId: number]: ReleaseGroupSecondaryTypeT;
    };
    release_packaging: {
        [releasePackagingId: number]: ReleasePackagingT;
    };
    release_status: {
        [releaseStatusId: number]: ReleaseStatusT;
    };
    script: {
        [scriptId: number]: ScriptT;
    };
    series: {
        [seriesId: number]: SeriesT;
    };
    series_alias_type: {
        [typeId: number]: SeriesAliasTypeT;
    };
    series_ordering_type: {
        [seriesOrderingTypeId: number]: SeriesOrderingTypeT;
    };
    series_type: {
        [seriesTypeId: number]: SeriesTypeT;
    };
    url: {
        [urlId: number]: UrlT;
    };
    work: {
        [workId: number]: WorkT;
    };
    work_alias_type: {
        [typeId: number]: WorkAliasTypeT;
    };
    work_attribute_type: {
        [workAttributeTypeId: number]: WorkAttributeTypeT;
    };
    work_type: {
        [workTypeId: number]: WorkTypeT;
    };
};
"Unknown Type: VariableDeclaration";
export default linkedEntities;
"WIP convertAST: FunctionDeclaration";
"Unknown Type: VariableDeclaration";
"WIP convertAST: FunctionDeclaration";
"Unknown Type: ExpressionStatement";
