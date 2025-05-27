// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { PartialDateFieldT } from "../../../../../declared-types.js"
import type { CowContext as CowContext } from "mutate-cow";
import { isDateValid as isDateValid, isYearFourDigits as isYearFourDigits } from "../utility/dates.js";
import { applyPendingErrors as applyPendingErrors } from "../utility/subfieldErrors.js";
export type ActionT = ({
    type: "set-date";
    date: {
        year: string;
        month: string;
        day: string;
    };
}) | ({
    type: "show-pending-errors";
});
"Unknown Type: TypeAlias";
export type StateT = PartialDateFieldT;
"Unknown Type: FunctionDeclaration";
"Unknown Export Type: FunctionDeclaration";
"Unknown Type: TypeAlias";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: BlockStatement";
export default PartialDateInput;
