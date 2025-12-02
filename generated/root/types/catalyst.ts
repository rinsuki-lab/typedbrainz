// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { ActiveEditorT } from "../../declared-types.js"
import { MergeableEntityTypeT } from "../../declared-types.js"
import { UserTagT } from "../../declared-types.js"
import { AggregatedTagT } from "../../declared-types.js"
import { MergeableEntityT } from "../../declared-types.js"
import { SeriesOrderingTypeT } from "../../declared-types.js"
import { SeededRelationshipT } from "../../declared-types.js"
import { ReleaseArtT } from "../../declared-types.js"
import { GenreT } from "../../declared-types.js"
import { EventArtT } from "../../declared-types.js"
import { RelatableEntityT } from "../../declared-types.js"
import { CommonsImageT } from "../../declared-types.js"
import { CollectionT } from "../../declared-types.js"
import { ArtistCreditFieldT } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { UnsanitizedEditorT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type CatalystActionT = {
    name: string;
};
export type CatalystContextT = {
    action: CatalystActionT;
    flash: {
        message?: string;
    };
    relative_uri: string;
    req: CatalystRequestContextT;
    session: CatalystSessionT | null;
    sessionid: string | null;
    stash: CatalystStashT;
    user?: UnsanitizedEditorT;
};
export type CatalystRequestContextT = {
    body_params: {
        [param: string]: string;
    };
    headers: {
        [header: string]: string;
    };
    method: string;
    query_params: {
        [param: string]: string;
    };
    secure: boolean;
    uri: string;
};
export type CatalystSessionT = {
    merger?: MergeQueueT;
    tport?: number;
};
export type CatalystStashT = {
    alert?: string;
    alert_mtime?: number | null;
    artist_credit?: ArtistCreditT;
    artist_credit_field?: ArtistCreditFieldT;
    can_delete?: boolean;
    collaborative_collections?: $ReadOnlyArray<CollectionT>;
    commons_image?: CommonsImageT | null;
    containment?: {
        [collectionId: number]: 1 | null | undefined;
    };
    current_action_requires_auth?: boolean;
    current_isrcs?: $ReadOnlyArray<string>;
    current_iswcs?: $ReadOnlyArray<string>;
    current_language: string;
    current_language_html: string;
    entity?: RelatableEntityT;
    event_artwork?: EventArtT;
    event_artwork_count?: number;
    genre_map?: {
        [genreName: string]: GenreT;
    };
    globals_script_nonce?: string;
    has_content_security_policy?: boolean;
    hide_merge_helper?: boolean;
    jsonld_data?: {};
    last_replication_date?: string;
    legacy_browser?: boolean;
    makes_no_changes?: boolean;
    more_tags?: boolean;
    mtcaptcha_script_nonce?: string;
    new_edit_notes?: boolean;
    new_edit_notes_mtime?: number | null;
    number_of_collections?: number;
    number_of_revisions?: number;
    overlong_string?: boolean;
    own_collections?: $ReadOnlyArray<CollectionT>;
    release_artwork?: ReleaseArtT;
    release_artwork_count?: number;
    release_cdtoc_count?: number;
    seeded_relationships?: $ReadOnlyArray<SeededRelationshipT> | null | undefined;
    series_ordering_types?: {
        [id: number]: SeriesOrderingTypeT;
    };
    server_languages?: $ReadOnlyArray<ServerLanguageT>;
    source_entity?: RelatableEntityT | null | undefined;
    subscribed?: boolean;
    to_merge?: $ReadOnlyArray<MergeableEntityT>;
    top_tags?: $ReadOnlyArray<AggregatedTagT>;
    user_tags?: $ReadOnlyArray<UserTagT>;
    within_dialog?: boolean;
};
export type MergeQueueT = {
    entities: $ReadOnlyArray<number>;
    ready_to_merge: boolean;
    type: MergeableEntityTypeT;
};
export type SanitizedCatalystSessionT = {
    tport?: number;
};
export type SanitizedCatalystContextT = {
    action: {
        name: string;
    };
    relative_uri: string;
    req: {
        method: string;
        query_params: {
            [param: string]: string;
        };
        uri: string;
    };
    session: SanitizedCatalystSessionT | null;
    stash: {
        artist_credit?: ArtistCreditT;
        artist_credit_field?: ArtistCreditFieldT;
        current_isrcs?: $ReadOnlyArray<string>;
        current_iswcs?: $ReadOnlyArray<string>;
        current_language: string;
        genre_map?: {
            [genreName: string]: GenreT;
        };
        mtcaptcha_script_nonce?: string;
        seeded_relationships?: $ReadOnlyArray<SeededRelationshipT> | null | undefined;
        series_ordering_types?: {
            [id: number]: SeriesOrderingTypeT;
        };
        server_languages?: $ReadOnlyArray<ServerLanguageT>;
        source_entity?: RelatableEntityT | null | undefined;
    };
    user: ActiveEditorT | null;
};
export type ServerLanguageT = {
    id: number;
    name: string;
    native_language: string;
    native_territory: string;
};
