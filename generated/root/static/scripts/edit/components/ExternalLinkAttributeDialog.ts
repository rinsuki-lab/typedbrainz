// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { DatePeriodFieldT } from "../../../../../declared-types.js"
import { FieldT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import mutate from "mutate-cow";
import * as React from "react";
import ButtonPopover from "../../common/components/ButtonPopover.js";
import type { LinkRelationshipT as LinkRelationshipT, LinkStateT as LinkStateT } from "../externalLinks.js";
import { copyDatePeriodField as copyDatePeriodField } from "../utility/copyFieldData.js";
import { createCompoundFieldFromObject as createCompoundFieldFromObject, createField as createField } from "../utility/createField.js";
import { applyAllPendingErrors as applyAllPendingErrors, hasSubfieldErrors as hasSubfieldErrors } from "../utility/subfieldErrors.js";
import DateRangeFieldset, { ActionT as DateRangeFieldsetActionT, partialDateFromField as partialDateFromField, runReducer as runDateRangeFieldsetReducer } from "./DateRangeFieldset.js";
import UrlRelationshipCreditFieldset from "./UrlRelationshipCreditFieldset.js";
type StateT = {
    credit: FieldT<string | null>;
    datePeriodField: DatePeriodFieldT;
    initialDatePeriodField: DatePeriodFieldT;
};
type ActionT = {
    action: DateRangeFieldsetActionT;
    type: "update-date-period";
} | {
    props: React.PropsOf<ExternalLinkAttributeDialog>;
    type: "update-initial-date-period";
} | {
    credit: string;
    type: "update-relationship-credit";
} | {
    type: "reset";
} | {
    type: "show-all-pending-errors";
};
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: BlockStatement";
export default ExternalLinkAttributeDialog;
