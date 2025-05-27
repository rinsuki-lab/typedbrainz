// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { DatePeriodFieldT } from "../../../../../declared-types.js"
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
export type ActionT = ({
    type: "update-begin-date";
    action: FormRowPartialDateActionT;
}) | ({
    type: "update-end-date";
    action: FormRowPartialDateActionT;
}) | ({
    type: "set-ended";
    enabled: boolean;
}) | ({
    type: "copy-date";
});
export type StateT = DatePeriodFieldT;
"Unknown Export Type: FunctionDeclaration";
"Unknown Type: FunctionDeclaration";
"Unknown Type: FunctionDeclaration";
"Unknown Export Type: FunctionDeclaration";
"Unknown Export Type: FunctionDeclaration";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: BlockStatement";
export type PropsT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier";
"Unknown Type: VariableDeclaration";
"Unknown Type: ExpressionStatement";
export default DateRangeFieldset;
