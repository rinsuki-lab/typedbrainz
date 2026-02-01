// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import FieldErrors from "./FieldErrors.js";
import FormLabel from "./FormLabel.js";
import FormRow from "./FormRow.js";
type InputOnChange = (_arg0: SyntheticInputEvent<HTMLInputElement>) => void;
type InputProps = {
    autoComplete?: string;
    className?: string;
    defaultValue?: string;
    disabled: boolean;
    id: string;
    name: string;
    onChange?: InputOnChange;
    placeholder?: string;
    ref?: {
        current: HTMLInputElement | null;
    };
    required: boolean;
    size: number | null | undefined;
    type: string;
    value?: string;
};
type ControlledPropsT = $ReadOnly<{
    onChange: InputOnChange;
    uncontrolled?: false;
}> | $ReadOnly<{
    uncontrolled: true;
}>;
"WIP convertAST: ExpressionStatement";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: BlockStatement";
export default FormRowText;
