// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { DatePeriodFieldT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import mutate, { CowContext as CowContext } from "mutate-cow";
import * as React from "react";
import { isDateNonEmpty as isDateNonEmpty } from "../../common/utility/isDateEmpty.js";
import parseIntegerOrNull from "../../common/utility/parseIntegerOrNull.js";
import useDateRangeFieldset from "../hooks/useDateRangeFieldset.js";
import { isDatePeriodValid as isDatePeriodValid } from "../utility/dates.js";
import { applyAllPendingErrors as applyAllPendingErrors } from "../utility/subfieldErrors.js";
import FieldErrors from "./FieldErrors.js";
import FormRowCheckbox from "./FormRowCheckbox.js";
import FormRowPartialDate, { ActionT as FormRowPartialDateActionT, runReducer as runFormRowPartialDateReducer } from "./FormRowPartialDate.js";
export type ActionT = {
    type: "update-begin-date";
    action: FormRowPartialDateActionT;
} | {
    type: "update-end-date";
    action: FormRowPartialDateActionT;
} | {
    type: "set-ended";
    enabled: boolean;
} | {
    type: "copy-date";
};
export type StateT = DatePeriodFieldT;
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: BlockStatement";
export type PropsT = React.PropsOf<_DateRangeFieldset>;
"WIP convertAST: VariableDeclaration";
"WIP convertAST: ExpressionStatement";
export default DateRangeFieldset;
