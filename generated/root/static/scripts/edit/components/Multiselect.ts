// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import * as React from "react";
import Autocomplete2 from "../../common/components/Autocomplete2.js";
import { default as autocompleteReducer } from "../../common/components/Autocomplete2/reducer.js";
import type { ActionT as AutocompleteActionT, EntityItemT as AutocompleteEntityItemT, StateT as AutocompleteStateT } from "../../common/components/Autocomplete2/types.js";
export type MultiselectActionT<V extends AutocompleteEntityItemT> = {
    type: "add-value";
} | {
    type: "remove-value";
    valueKey: number;
} | {
    action: AutocompleteActionT<V>;
    type: "update-value-autocomplete";
    valueKey: number;
};
export type MultiselectValueStateT<V> = {
    autocomplete: AutocompleteStateT<V>;
    key: number;
    removed: boolean;
};
export type MultiselectValuePropsT<V extends AutocompleteEntityItemT, VS extends MultiselectValueStateT<V>> = {
    buildExtraChildren: "TODO: Support TypeNode FunctionTypeAnnotation";
    dispatch: "TODO: Support TypeNode FunctionTypeAnnotation";
    state: $Exact<VS>;
};
export type MultiselectStateT<V extends AutocompleteEntityItemT, VS extends MultiselectValueStateT<V>> = {
    max: number | null;
    values: $ReadOnlyArray<$Exact<VS>>;
};
export const ATTR_VALUE_LABEL_STYLE = "Unknown Expression Type: ObjectExpression";
"Unknown Export Type: FunctionDeclaration";
"Unknown Export Type: FunctionDeclaration";
"Unknown Export Type: FunctionDeclaration";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: LabeledStatement";
"Unknown Type: BlockStatement";
export const MultiselectValue: "TODO: Support TypeNode TypeofTypeAnnotation" = "Unknown Expression Type: CallExpression";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: BlockStatement";
"Unknown Type: VariableDeclaration";
export default Multiselect;
