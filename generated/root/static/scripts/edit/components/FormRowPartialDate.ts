// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { PartialDateFieldT } from "../../../../../declared-types.js"
import FieldErrors from "./FieldErrors.js";
import FormLabel from "./FormLabel.js";
import FormRow from "./FormRow.js";
import PartialDateInput, { ActionT as PartialDateInputActionT, runReducer as runPartialDateInputReducer } from "./PartialDateInput.js";
export type ActionT = PartialDateInputActionT;
"Unknown Type: TypeAlias";
export type StateT = PartialDateFieldT;
export const runReducer = runPartialDateInputReducer;
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: BlockStatement";
export default FormRowPartialDate;
