// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { StrOrNum } from "../../../../declared-types.js"
import { RelatableEntityTypeT } from "../../../../declared-types.js"
import { RelatableEntityT } from "../../../../declared-types.js"
import { DatePeriodRoleT } from "../../../../declared-types.js"
import { LinkTypeT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
import { toUnicode as toUnicode } from "punycode";
import $ from "jquery";
import ko from "knockout";
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import invariant from "../../../utility/invariant.js";
import { EMPTY_PARTIAL_DATE as EMPTY_PARTIAL_DATE, ENTITIES_WITH_RELATIONSHIP_CREDITS as ENTITIES_WITH_RELATIONSHIP_CREDITS, FAVICON_CLASSES as FAVICON_CLASSES, VIDEO_ATTRIBUTE_GID as VIDEO_ATTRIBUTE_GID, VIDEO_ATTRIBUTE_ID as VIDEO_ATTRIBUTE_ID } from "../common/constants.js";
import { compare as compare, l as l } from "../common/i18n.js";
import expand2react from "../common/i18n/expand2react.js";
import linkedEntities from "../common/linkedEntities.mjs";
import MB from "../common/MB.js";
import { groupBy as groupBy, keyBy as keyBy, uniqBy as uniqBy } from "../common/utility/arrays.js";
import { bracketedText as bracketedText } from "../common/utility/bracketed.js";
import { getCatalystContext as getCatalystContext, getSourceEntityData as getSourceEntityData } from "../common/utility/catalyst.js";
import { compareDatePeriods as compareDatePeriods } from "../common/utility/compareDates.js";
import formatDatePeriod from "../common/utility/formatDatePeriod.js";
import isDatabaseRowId from "../common/utility/isDatabaseRowId.js";
import { isDateNonEmpty as isDateNonEmpty } from "../common/utility/isDateEmpty.js";
import { hasSessionStorage as hasSessionStorage, sessionStorageWrapper as sessionStorageWrapper } from "../common/utility/storage.js";
import { uniqueId as uniqueId } from "../common/utility/strings.js";
import { appendHiddenRelationshipInputs as appendHiddenRelationshipInputs } from "../relationship-editor/utility/prepareHtmlFormSubmission.js";
import { isMalware as isMalware } from "../url/utility/isGreyedOut.js";
import EntityPendingEditsWarning from "./components/EntityPendingEditsWarning.js";
import ExternalLinkAttributeDialog from "./components/ExternalLinkAttributeDialog.js";
import HelpIcon from "./components/HelpIcon.js";
import RelationshipPendingEditsWarning from "./components/RelationshipPendingEditsWarning.js";
import RemoveButton from "./components/RemoveButton.js";
import URLInputPopover from "./components/URLInputPopover.js";
import withLoadedTypeInfo from "./components/withLoadedTypeInfo.js";
import { compactEntityJson as compactEntityJson, decompactEntityJson as decompactEntityJson } from "./utility/compactEntityJson.js";
import isPositiveInteger from "./utility/isPositiveInteger.js";
import isShortenedUrl from "./utility/isShortenedUrl.js";
import { stripAttributes as stripAttributes } from "./utility/linkPhrase.js";
import { linkTypeOptions as linkTypeOptions } from "./forms.js";
import type { RelationshipTypeT as RelationshipTypeT } from "./URLCleanup.js";
import * as URLCleanup from "./URLCleanup.js";
import * as validation from "./validation.js";
type ErrorTarget = $Values<"WIP convertTypeNode: TypeofTypeAnnotation">;
"WIP convertAST: VariableDeclaration";
type HighlightT = $Values<"WIP convertTypeNode: TypeofTypeAnnotation">;
export type ErrorT = {
    blockMerge?: boolean;
    message: React.ReactNode;
    target: ErrorTarget;
};
type LinkTypeOptionT = {
    data: LinkTypeT;
    disabled?: boolean;
    text: string;
    value: number;
};
export type LinkStateT = $ReadOnly<$_$Spread<DatePeriodRoleT, {
    deleted: boolean;
    editsPending: boolean;
    entity0: RelatableEntityT | {
        entityType: RelatableEntityTypeT;
        id?: void;
        isNewEntity?: true;
        name?: string;
        orderingTypeID?: number;
        relationships?: void;
    } | null;
    entity0_credit: string;
    entity1: RelatableEntityT | null;
    entity1_credit: string;
    pendingTypes: $ReadOnlyArray<number> | null;
    rawUrl: string;
    relationship: StrOrNum | null;
    submitted: boolean;
    type: number | null;
    url: string;
    video: boolean;
}>>;
type LinkMapT = Map<string, LinkStateT>;
export type LinkRelationshipT = $ReadOnly<$_$Spread<LinkStateT, {
    error: ErrorT | null;
    index: number;
    urlIndex: number;
}>>;
type LinksEditorProps = {
    errorObservable?: "WIP convertTypeNode: FunctionTypeAnnotation";
    isNewEntity: boolean;
    sourceData: RelatableEntityT | {
        entityType: RelatableEntityTypeT;
        id?: void;
        isNewEntity?: true;
        name?: string;
        orderingTypeID?: number;
        relationships?: void;
    };
};
type LinksEditorState = {
    links: $ReadOnlyArray<LinkStateT>;
};
"WIP convertAST: FunctionDeclaration";
export class _ExternalLinksEditor extends React.Component<LinksEditorProps, LinksEditorState> {
    creditableEntityProp: "entity0_credit" | "entity1_credit" | null;
    tableRef: {
        current: HTMLTableElement | null;
    };
    generalLinkTypes: $ReadOnlyArray<LinkTypeOptionT>;
    oldLinks: LinkMapT;
    errorObservable: "WIP convertTypeNode: FunctionTypeAnnotation";
    initialLinks: $ReadOnlyArray<LinkStateT>;
    sourceType: RelatableEntityTypeT;
    typeOptions: $ReadOnlyArray<LinkTypeOptionT>;
    submittedLinksWrapper: {
        get: "WIP convertTypeNode: FunctionTypeAnnotation";
        remove: "WIP convertTypeNode: FunctionTypeAnnotation";
        set: "WIP convertTypeNode: FunctionTypeAnnotation";
    };
    constructor(props: LinksEditorProps);
    copyEditDataToReleaseEditor();
    componentDidUpdate();
    setLinkState(index: number, state: $ReadOnly<Partial<LinkStateT>>, callback: "WIP convertTypeNode: FunctionTypeAnnotation");
    cleanupUrl(url: string): string;
    handleUrlChange(linkIndexes: $ReadOnlyArray<number>, urlIndex: number, rawUrl: string);
    handleUrlBlur(index: number, isDuplicate: boolean, event: SyntheticFocusEvent<HTMLInputElement>, urlIndex: number, canMerge: boolean);
    submitPendingTypes(link: LinkStateT, index: number);
    handleLinkSubmit(index: number, urlIndex: number, event: SyntheticEvent<HTMLInputElement>, canMerge: boolean);
    handleTypeChange(index: number, event: SyntheticEvent<HTMLSelectElement>);
    handleTypeBlur(index: number, event: SyntheticFocusEvent<HTMLSelectElement>, isDuplicate: boolean, urlIndex: number, canMerge: boolean);
    handleVideoChange(index: number, event: SyntheticEvent<HTMLInputElement>);
    removeLink(index: number);
    removeLinks(indexes: $ReadOnlyArray<number>, urlIndex: number);
    addRelationship(url: string, urlIndex: number);
    getOldLinksHash(): LinkMapT;
    getEditData(): {
        allLinks: LinkMapT;
        newLinks: LinkMapT;
        oldLinks: LinkMapT;
    };
    getFormData(startingPrefix: string, startingIndex: number, pushInput: "WIP convertTypeNode: FunctionTypeAnnotation");
    validateLink(link: LinkRelationshipT | LinkStateT, checker: URLCleanup.Checker): ErrorT | null;
}
