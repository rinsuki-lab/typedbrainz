// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityT } from "../../../../declared-types.js"
import { UrlT } from "../../../../declared-types.js"
import { CompT } from "../../../../declared-types.js"
import { PartialDateT } from "../../../../declared-types.js"
import { DatePeriodFieldT } from "../../../../declared-types.js"
import { FieldT } from "../../../../declared-types.js"
import { LinkTypeT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
import type { ImmutableTree as ImmutableTree } from "weight-balanced-tree";
import type { ActionT as DateRangeFieldsetActionT } from "../edit/components/DateRangeFieldset.js";
import { ERROR_TARGETS as ERROR_TARGETS } from "../edit/URLCleanup.js";
type ErrorTargetT = $Values<ERROR_TARGETS>;
export type ErrorT = {
    blockMerge?: boolean;
    message: React.ReactNode;
    target: ErrorTargetT;
};
export type HighlightT = "rel-add" | "rel-edit" | "" | "rel-remove";
export type LinkTypeOptionT = {
    data: LinkTypeT;
    disabled?: boolean;
    text: string;
    value: number;
};
export type LinksEditorRelationshipDialogStateT = {
    creditField: FieldT<string | null>;
    datePeriodField: DatePeriodFieldT;
};
export type LinkRelationshipStateT = {
    beginDate: PartialDateT | null;
    dialogState: LinksEditorRelationshipDialogStateT | null;
    editsPending: boolean;
    endDate: PartialDateT | null;
    ended: boolean;
    entityCredit: string;
    error: ErrorT | null;
    id: number;
    linkTypeID: number | null;
    originalState: LinkRelationshipStateT | null;
    removed: boolean;
    url: string;
    video: boolean;
};
export type LinkRelationshipStatusT = {
    changes: {
        beginDate?: CompT<PartialDateT | null>;
        endDate?: CompT<PartialDateT | null>;
        ended?: CompT<boolean>;
        entityCredit?: CompT<string>;
        linkTypeID?: CompT<number | null>;
        url?: CompT<string>;
        video?: CompT<boolean>;
    };
    isNew: boolean;
    removed: boolean;
};
export type LinkStateT = {
    duplicateOf: {
        index: number;
        link: LinkStateT;
    } | null;
    error: ErrorT | null;
    isNew: boolean;
    isSubmitted: boolean;
    key: number;
    originalUrlEntity: UrlT | null;
    rawUrl: string;
    relationships: $ReadOnlyArray<LinkRelationshipStateT>;
    url: string;
    urlPopoverLinkState: LinkStateT | null;
};
export type LinksEditorStateT = {
    focus: string;
    links: ImmutableTree<LinkStateT>;
    source: RelatableEntityT;
};
export type LinksEditorActionT = {
    type: "add-relationship";
    link: LinkStateT;
} | {
    type: "set-focus";
    focus: string;
} | {
    type: "handle-url-change";
    link: LinkStateT;
    rawUrl: string;
} | {
    type: "merge-link";
    link: LinkStateT;
} | {
    type: "open-url-input-popover";
    link: LinkStateT;
} | {
    type: "toggle-remove-link";
    link: LinkStateT;
} | {
    type: "toggle-remove-relationship";
    link: LinkStateT;
    relationship: LinkRelationshipStateT;
} | {
    type: "set-type";
    link: LinkStateT;
    relationship: LinkRelationshipStateT;
    linkTypeID: number | null;
} | {
    type: "set-video";
    link: LinkStateT;
    relationship: LinkRelationshipStateT;
    video: boolean;
} | {
    type: "submit-link";
    link: LinkStateT;
} | {
    type: "update-url-input-popover-url";
    link: LinkStateT;
    rawUrl: string;
} | {
    type: "accept-url-input-popover";
    link: LinkStateT;
} | {
    type: "cancel-url-input-popover";
    link: LinkStateT;
} | {
    type: "update-link-relationship-dialog";
    action: LinksEditorRelationshipDialogActionT;
    link: LinkStateT;
    relationship: LinkRelationshipStateT;
} | {
    type: "accept-link-relationship-dialog";
    link: LinkStateT;
    relationship: LinkRelationshipStateT;
} | {
    type: "toggle-link-relationship-dialog";
    link: LinkStateT;
    open: boolean;
    relationship: LinkRelationshipStateT;
};
export type LinksEditorRelationshipDialogActionT = {
    action: DateRangeFieldsetActionT;
    type: "update-date-period";
} | {
    credit: string;
    type: "update-relationship-credit";
} | {
    type: "show-all-pending-errors";
};
