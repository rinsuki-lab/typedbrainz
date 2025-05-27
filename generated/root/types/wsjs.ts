// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EDIT_RELEASEGROUP_EDIT_T } from "../../declared-types.js"
import { EDIT_RELEASE_REORDER_MEDIUMS_T } from "../../declared-types.js"
import { EDIT_RELEASE_EDITRELEASELABEL_T } from "../../declared-types.js"
import { EDIT_RELEASE_EDIT_T } from "../../declared-types.js"
import { EDIT_RELEASE_DELETERELEASELABEL_T } from "../../declared-types.js"
import { EDIT_RELEASE_ADD_ANNOTATION_T } from "../../declared-types.js"
import { EDIT_RECORDING_EDIT_T } from "../../declared-types.js"
import { EDIT_MEDIUM_EDIT_T } from "../../declared-types.js"
import { EDIT_MEDIUM_DELETE_T } from "../../declared-types.js"
import { EDIT_MEDIUM_ADD_DISCID_T } from "../../declared-types.js"
import { EDIT_RELEASE_ADDRELEASELABEL_T } from "../../declared-types.js"
import { WorkT } from "../../declared-types.js"
import { EDIT_MEDIUM_CREATE_T } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { EDIT_RELEASEGROUP_CREATE_T } from "../../declared-types.js"
import { ReleaseT } from "../../declared-types.js"
import { EDIT_RELEASE_CREATE_T } from "../../declared-types.js"
import { EDIT_WORK_CREATE_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIPS_REORDER_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_DELETE_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_EDIT_T } from "../../declared-types.js"
import { EDIT_RELATIONSHIP_CREATE_T } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { NonUrlRelatableEntityTypeT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type WsJsRelationshipEntityT = {
    entityType: NonUrlRelatableEntityTypeT;
    gid: string;
    name: string;
} | {
    entityType: "url";
    gid: string;
    name: string;
};
export type WsJsRelationshipAttributeT = {
    credited_as: string;
    removed: boolean;
    text_value: string;
    type: {
        gid: string;
    };
};
export type WsJsRelationshipCommonT = {
    attributes: $ReadOnlyArray<WsJsRelationshipAttributeT>;
    begin_date: PartialDateT;
    end_date: PartialDateT;
    ended: boolean;
    entities: [
        WsJsRelationshipEntityT,
        WsJsRelationshipEntityT
    ];
    entity0_credit: string;
    entity1_credit: string;
};
export type WsJsEditRelationshipCreateT = $ReadOnly<_$Spread<WsJsRelationshipCommonT, {
    edit_type: EDIT_RELATIONSHIP_CREATE_T;
    linkOrder: number;
    linkTypeID: number;
}>>;
export type WsJsEditRelationshipEditT = $ReadOnly<_$Spread<Partial<WsJsRelationshipCommonT>, {
    edit_type: EDIT_RELATIONSHIP_EDIT_T;
    id: number;
    linkTypeID: number;
}>>;
export type WsJsEditRelationshipDeleteT = $ReadOnly<{
    edit_type: EDIT_RELATIONSHIP_DELETE_T;
    id: number;
    linkTypeID: number;
}>;
export type WsJsEditRelationshipT = WsJsEditRelationshipCreateT | WsJsEditRelationshipEditT | WsJsEditRelationshipDeleteT | WsJsEditRelationshipsReorderT;
export type WsJsEditRelationshipsReorderT = {
    edit_type: EDIT_RELATIONSHIPS_REORDER_T;
    linkTypeID: number;
    relationship_order: $ReadOnlyArray<{
        link_order: number;
        relationship_id: number;
    }>;
};
export type WsJsEditWorkCreateT = {
    comment: string;
    edit_type: EDIT_WORK_CREATE_T;
    languages: $ReadOnlyArray<number>;
    name: string;
    type_id: number | null;
};
export type WS_EDIT_RESPONSE_OK_T = 1;
export type WS_EDIT_RESPONSE_NO_CHANGES_T = 2;
export type WsJsEditResponseT = {
    edits: $ReadOnlyArray<{
        edit_type: EDIT_RELATIONSHIP_CREATE_T;
        relationship_id: number | null;
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        edit_type: EDIT_RELEASE_CREATE_T;
        entity: ReleaseT;
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        edit_type: EDIT_RELEASEGROUP_CREATE_T;
        entity: ReleaseGroupT;
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        edit_type: EDIT_MEDIUM_CREATE_T;
        entity: {
            id: number;
            position: number;
        };
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        edit_type: EDIT_WORK_CREATE_T;
        entity: WorkT;
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        edit_type: EDIT_RELEASE_ADDRELEASELABEL_T;
        entity: {
            catalogNumber: string | null;
            id: number;
            labelID: number | null;
        };
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        edit_type: EDIT_MEDIUM_ADD_DISCID_T | EDIT_MEDIUM_DELETE_T | EDIT_MEDIUM_EDIT_T | EDIT_RECORDING_EDIT_T | EDIT_RELATIONSHIP_DELETE_T | EDIT_RELATIONSHIP_EDIT_T | EDIT_RELATIONSHIPS_REORDER_T | EDIT_RELEASE_ADD_ANNOTATION_T | EDIT_RELEASE_DELETERELEASELABEL_T | EDIT_RELEASE_EDIT_T | EDIT_RELEASE_EDITRELEASELABEL_T | EDIT_RELEASE_REORDER_MEDIUMS_T | EDIT_RELEASEGROUP_EDIT_T;
        response: WS_EDIT_RESPONSE_OK_T;
    } | {
        response: WS_EDIT_RESPONSE_NO_CHANGES_T;
    }>;
};
