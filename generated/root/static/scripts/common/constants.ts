// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { WS_EDIT_RESPONSE_NO_CHANGES_T } from "../../../../declared-types.js"
import { WS_EDIT_RESPONSE_OK_T } from "../../../../declared-types.js"
import { QualityT } from "../../../../declared-types.js"
import { RelatableEntityTypeT } from "../../../../declared-types.js"
import { N_l_T } from "../../../../declared-types.js"
import { PartialDateT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
import ENTITIES from "../../../../entities.mjs";
// export { ENTITIES as ENTITIES }; // TODO: remove comment out
export const EMPTY_PARTIAL_DATE: PartialDateT = "WIP convertExpression: CallExpression";
export const ENTITY_NAMES: {
    area: N_l_T;
    artist: N_l_T;
    event: N_l_T;
    genre: N_l_T;
    instrument: N_l_T;
    label: N_l_T;
    place: N_l_T;
    recording: N_l_T;
    release: N_l_T;
    release_group: N_l_T;
    series: N_l_T;
    url: N_l_T;
    work: N_l_T;
} = "WIP convertExpression: ObjectExpression";
export const INSTRUMENT_ROOT_ID = 14;
export const VOCAL_ROOT_ID = 3;
export const TASK_ATTRIBUTE_ID = 1150;
export const AREA_TYPE_COUNTRY = 1;
export const ARTIST_TYPE_PERSON = 1;
export const ARTIST_TYPE_GROUP = 2;
export const ARTIST_TYPE_ORCHESTRA = 5;
export const ARTIST_TYPE_CHOIR = 6;
export const ARTIST_GROUP_TYPES: Set<number> = "WIP convertExpression: NewExpression";
export const CONTACT_URL = "https://metabrainz.org/contact";
export const DARTIST_ID = 2;
export const DLABEL_ID = 1;
export const FAVICON_CLASSES: {
    [host: string]: string;
} = "WIP convertExpression: ObjectExpression";
export const PART_OF_SERIES_LINK_TYPES: {
    [type: RelatableEntityTypeT]: string | null;
} = "WIP convertExpression: ObjectExpression";
export const PART_OF_SERIES_LINK_TYPE_GIDS: $ReadOnlyArray<string> = "WIP convertExpression: CallExpression";
export const PART_OF_SERIES_LINK_TYPE_IDS: $ReadOnlyArray<number> = [740, 741, 742, 743, 802, 996];
export const PROBABLY_CLASSICAL_LINK_TYPES = [40, 45, 46, 150, 151, 300, 759, 760];
export const RECORDING_OF_LINK_TYPE_ID: number = 278;
export const RECORDING_OF_LINK_TYPE_GID: string = "a3005666-a872-32c3-ad06-98af558e99b0";
export const RT_MIRROR = 2;
export const TIME_ATTRIBUTE = "ebd303c3-7f57-452a-aa3b-d780ebad868d";
export const SERIES_ORDERING_ATTRIBUTE = "a59c5830-5ec7-38fe-9a21-c7ea54f6650a";
export const SERIES_ORDERING_TYPE_AUTOMATIC = 1;
export const SERIES_ORDERING_TYPE_MANUAL = 2;
export const MBID_REGEXP: RegExp = "WIP convertLiteral: Literal";
export const VARTIST_GID = "89ad4ac3-39f7-470e-963a-56509c546377";
export const VARTIST_ID = 1;
export const VARTIST_NAME = "Various Artists";
export const ANON_ARTIST_GID = "f731ccc4-e22a-43af-a747-64213329e088";
export const ANON_ARTIST_ID = 15071;
export const DATA_ARTIST_GID = "33cf029c-63b0-41a0-9855-be2a3665fb3b";
export const DATA_ARTIST_ID = 41744;
export const DIALOGUE_ARTIST_GID = "314e1c25-dde7-4e4d-b2f4-0a7b9f7c56dc";
export const DIALOGUE_ARTIST_ID = 92121;
export const NO_ARTIST_GID = "eec63d3c-3b81-4ad4-b1e4-7c147d4d2b61";
export const NO_ARTIST_ID = 105725;
export const TRAD_ARTIST_GID = "9be7f096-97ec-4615-8957-8d40b5dcbc41";
export const TRAD_ARTIST_ID = 762646;
export const UNKNOWN_ARTIST_GID = "125ec42a-7229-4250-afc5-e057484327fe";
export const UNKNOWN_ARTIST_ID = 97546;
export const SPECIAL_ARTIST_GIDS: $ReadOnlyArray<string> = [VARTIST_GID, ANON_ARTIST_GID, DATA_ARTIST_GID, DIALOGUE_ARTIST_GID, NO_ARTIST_GID, TRAD_ARTIST_GID, UNKNOWN_ARTIST_GID];
export const SPECIAL_ARTIST_IDS: $ReadOnlyArray<number> = [DARTIST_ID, VARTIST_ID, ANON_ARTIST_ID, DATA_ARTIST_ID, DIALOGUE_ARTIST_ID, NO_ARTIST_ID, TRAD_ARTIST_ID, UNKNOWN_ARTIST_ID];
export const NOLABEL_GID = "157afde4-4bf5-4039-8ad2-5a15acc85176";
export const NOLABEL_ID = 3267;
export const VIDEO_ATTRIBUTE_ID = 582;
export const VIDEO_ATTRIBUTE_GID = "112054d5-e706-4dd8-99ea-09aabee36cd6";
export const MAX_LENGTH_DIFFERENCE = 10500;
export const MAX_RECENT_ENTITIES = 10;
export const MIN_NAME_SIMILARITY = 0.75;
export const ENTITIES_WITH_RELATIONSHIP_CREDITS = "WIP convertExpression: ObjectExpression";
export const QUALITY_NAMES: Map<QualityT, () => string> = "WIP convertExpression: NewExpression";
export const FLUENCY_NAMES: {
    [fluency: string]: () => string;
} = "WIP convertExpression: ObjectExpression";
export const LANGUAGE_ENG_ID = 120;
export const LANGUAGE_MUL_ID = 284;
export const LANGUAGE_ZXX_ID = 486;
export const COUNTRY_JA_AREA_ID = 107;
export const DISPLAY_NONE_STYLE = "WIP convertExpression: CallExpression";
export const WS_EDIT_RESPONSE_OK: WS_EDIT_RESPONSE_OK_T = 1;
export const WS_EDIT_RESPONSE_NO_CHANGES: WS_EDIT_RESPONSE_NO_CHANGES_T = 2;
export const BRACKET_PAIRS = [["(", ")"], ["[", "]"], ["<", ">"], ["\uFF08", "\uFF09"], ["\uFF3B", "\uFF3D"], ["{", "}"], ["\u3010", "\u3011"]];
