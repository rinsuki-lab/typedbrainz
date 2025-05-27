// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
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
    buildExtraChildren?: "WIP convertTypeNode: FunctionTypeAnnotation";
    dispatch: "WIP convertTypeNode: FunctionTypeAnnotation";
    state: $Exact<VS>;
};
export type MultiselectStateT<V extends AutocompleteEntityItemT, VS extends MultiselectValueStateT<V>> = {
    max: number | null;
    values: $ReadOnlyArray<$Exact<VS>>;
};
export const ATTR_VALUE_LABEL_STYLE = "WIP convertExpression: ObjectExpression";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: ExpressionStatement";
"Unknown Type: LabeledStatement";
"Unknown Type: BlockStatement";
export const MultiselectValue: "WIP convertTypeNode: TypeofTypeAnnotation" = "WIP convertExpression: CallExpression";
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
