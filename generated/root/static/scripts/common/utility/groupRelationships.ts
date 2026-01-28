// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityTypeT } from "../../../../../declared-types.js"
import { Expand2ReactOutput } from "../../../../../declared-types.js"
import { TrackT } from "../../../../../declared-types.js"
import { RelatableEntityT } from "../../../../../declared-types.js"
import { DatePeriodRoleT } from "../../../../../declared-types.js"
import { LinkAttrT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import { cmpLinkAttrs as cmpLinkAttrs, getExtraAttributes as getExtraAttributes, interpolate as interpolate, interpolateText as interpolateText } from "../../edit/utility/linkPhrase.js";
import { INSTRUMENT_ROOT_ID as INSTRUMENT_ROOT_ID, VOCAL_ROOT_ID as VOCAL_ROOT_ID } from "../constants.js";
import { compare as compare } from "../i18n.js";
import commaList from "../i18n/commaList.js";
import linkedEntities from "../linkedEntities.mjs";
import areDatePeriodsEqual from "./areDatePeriodsEqual.js";
import { arraysEqual as arraysEqual, mergeSortedArrayInto as mergeSortedArrayInto, sortedFindOrInsert as sortedFindOrInsert, sortedIndexWith as sortedIndexWith } from "./arrays.js";
import { compareStrings as compareStrings } from "./compare.mjs";
import { compareDatePeriods as compareDatePeriods } from "./compareDates.js";
import getSortName from "./getSortName.js";
import isLinkTypeDirectionOrderable from "./isLinkTypeDirectionOrderable.js";
import { uniqueId as uniqueId } from "./strings.js";
"WIP convertAST: VariableDeclaration";
export type DatedExtraAttributes = {
    attributes: Array<LinkAttrT>;
    datePeriods: Array<DatePeriodRoleT>;
};
export type RelationshipTargetGroupT = {
    datedExtraAttributesList: Array<DatedExtraAttributes>;
    earliestDatePeriod: DatePeriodRoleT;
    editsPending: boolean;
    hasAttributes: boolean;
    isOrderable: boolean;
    key: string;
    linkOrder: number | null;
    target: RelatableEntityT;
    targetCredit: string;
    tracks: Set<TrackT> | null;
};
type PhraseGroupLinkTypeInfoT = {
    backward: boolean;
    editsPending: boolean;
    phrase: Expand2ReactOutput;
    rootTypeId: number | null;
    textPhrase: string;
    typeId: number;
};
export type RelationshipPhraseGroupT = {
    combinedPhrase: Expand2ReactOutput;
    key: string;
    linkTypeInfo: Array<PhraseGroupLinkTypeInfoT>;
    targetGroups: Array<RelationshipTargetGroupT>;
};
export type RelationshipTargetTypeGroupT = {
    relationshipPhraseGroups: Array<RelationshipPhraseGroupT>;
    targetType: RelatableEntityTypeT;
};
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: VariableDeclaration";
export const areLinkAttrsEqual = "WIP convertExpression: ArrowFunctionExpression";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
export default "WIP convertExpression: FunctionDeclaration";
