// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { PartialDateFieldT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import type { CowContext as CowContext } from "mutate-cow";
import { isDateValid as isDateValid, isYearFourDigits as isYearFourDigits } from "../utility/dates.js";
import { applyPendingErrors as applyPendingErrors } from "../utility/subfieldErrors.js";
export type ActionT = {
    type: "set-date";
    date: {
        year?: string;
        month?: string;
        day?: string;
    };
} | {
    type: "show-pending-errors";
};
"WIP convertAST: TypeAlias";
export type StateT = PartialDateFieldT;
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: TypeAlias";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: BlockStatement";
export default PartialDateInput;
