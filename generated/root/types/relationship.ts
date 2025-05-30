// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityT } from "../../declared-types.js"
import { PendingEditsRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { RelatableEntityTypeT } from "../../declared-types.js"
import { StrOrNum } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { OptionTreeT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type LinkAttrT = {
    credited_as?: string;
    text_value?: string;
    type: {
        gid: string;
    } | LinkAttrTypeT;
    typeID: number;
    typeName: string;
};
export type LinkAttrTypeT = $_$Spread<OptionTreeT<"link_attribute_type">, {
    children?: $ReadOnlyArray<LinkAttrTypeT>;
    creditable: boolean;
    free_text: boolean;
    instrument_aliases?: $ReadOnlyArray<string>;
    instrument_comment?: string;
    instrument_type_id?: number;
    instrument_type_name?: string;
    l_description?: string;
    l_name?: string;
    level?: number;
    root_gid: string;
    root_id: number;
}>;
export type LinkTypeAttrTypeT = $ReadOnly<$_$Spread<TypeRoleT<LinkAttrTypeT>, {
    max: number | null;
    min: number | null;
}>>;
export type LinkTypeT = $_$Spread<OptionTreeT<"link_type">, {
    attributes: {
        [typeId: StrOrNum]: LinkTypeAttrTypeT;
    };
    cardinality0: number;
    cardinality1: number;
    children?: $ReadOnlyArray<LinkTypeT>;
    deprecated: boolean;
    documentation: string | null;
    examples: $ReadOnlyArray<{
        name: string;
        relationship: RelationshipT;
    }> | null;
    has_dates: boolean;
    id: number;
    l_description?: string;
    l_link_phrase?: string;
    l_name?: string;
    l_reverse_link_phrase?: string;
    link_phrase: string;
    long_link_phrase: string;
    orderable_direction: number;
    reverse_link_phrase: string;
    root_id: number | null;
    type0: RelatableEntityTypeT;
    type1: RelatableEntityTypeT;
}>;
export type PagedLinkTypeGroupT = {
    backward: boolean;
    is_loaded: boolean;
    limit: number;
    link_type_id: number;
    offset: number;
    relationships: $ReadOnlyArray<RelationshipT>;
    total_relationships: number;
};
export type PagedTargetTypeGroupT = {
    [linkTypeIdAndSourceColumn: string]: PagedLinkTypeGroupT;
};
export type RelationshipT = $ReadOnly<$_$Spread<DatePeriodRoleT, $_$Spread<PendingEditsRoleT, {
    attributes: $ReadOnlyArray<LinkAttrT>;
    backward: boolean;
    entity0?: RelatableEntityT | null | undefined;
    entity0_credit: string;
    entity0_id: number;
    entity1?: RelatableEntityT | null | undefined;
    entity1_credit: string;
    entity1_id: number;
    id: number;
    linkOrder: number;
    linkTypeID: number;
    source_id: number | null;
    source_type: RelatableEntityTypeT;
    target: RelatableEntityT;
    target_type: RelatableEntityTypeT;
    verbosePhrase: string;
}>>>;
export type SeededRelationshipT = $ReadOnly<$_$Spread<RelationshipT, {
    entity0_id: number | null;
    entity1_id: number | null;
    id: null;
    linkTypeID: number | null;
}>>;
