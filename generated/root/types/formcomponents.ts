// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { StrOrNum } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
export type AreaFieldT = CompoundFieldT<{
    gid: FieldT<string | null>;
    id: FieldT<string | null>;
    name: FieldT<string>;
}>;
export type ArtistFieldT = CompoundFieldT<{
    id: FieldT<string | null>;
    name: FieldT<string>;
}>;
export type ArtistCreditFieldT = CompoundFieldT<{
    names: ArtistCreditNameFieldT;
}>;
export type ArtistCreditNameFieldT = CompoundFieldT<{
    artist: ArtistCreditFieldT;
    join_phrase: FieldT<string>;
    name: FieldT<string>;
}>;
export type CompoundFieldT<F> = {
    errors: $ReadOnlyArray<string>;
    field: F;
    has_errors: boolean;
    html_name: string;
    id: number;
    pendingErrors: $ReadOnlyArray<string>;
    type: "compound_field";
};
export type DatePeriodFieldT = CompoundFieldT<{
    begin_date: PartialDateFieldT;
    end_date: PartialDateFieldT;
    ended: FieldT<boolean>;
}>;
export type FieldT<V> = {
    errors: $ReadOnlyArray<string>;
    has_errors: boolean;
    html_name: string;
    id: number;
    pendingErrors: $ReadOnlyArray<string>;
    type: "field";
    value: V;
};
export type FormT<F, N extends string = ""> = {
    field: F;
    has_errors: boolean;
    name: N;
    type: "form";
};
export type SubfieldsT = {};
export type AnyFieldT = ({
    errors: $ReadOnlyArray<string>;
    field: SubfieldsT;
    pendingErrors: $ReadOnlyArray<string>;
    type: "compound_field";
}) | ({
    errors: $ReadOnlyArray<string>;
    field: $ReadOnlyArray<AnyFieldT>;
    pendingErrors: $ReadOnlyArray<string>;
    type: "repeatable_field";
}) | ({
    errors: $ReadOnlyArray<string>;
    pendingErrors: $ReadOnlyArray<string>;
    type: "field";
});
export type FormOrAnyFieldT = FormT<SubfieldsT> | AnyFieldT;
export type GroupedOptionsT = $ReadOnlyArray<{
    optgroup: string;
    options: SelectOptionsT;
}>;
export type MaybeGroupedOptionsT = ({
    grouped: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
    options: GroupedOptionsT;
}) | ({
    grouped: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
    options: SelectOptionsT;
});
export type OptionListT = $ReadOnlyArray<{
    text: string;
    value: number;
}>;
export type OptionTreeT<T> = EntityRoleT<T> & {
    child_order: number;
    description: string;
    gid: string;
    name: string;
    parent_id: number | null;
};
export type PartialDateFieldT = CompoundFieldT<{
    day: FieldT<StrOrNum | null>;
    month: FieldT<StrOrNum | null>;
    year: FieldT<StrOrNum | null>;
}>;
export type RepeatableFieldT<F> = {
    errors: $ReadOnlyArray<string>;
    field: $ReadOnlyArray<F>;
    has_errors: boolean;
    html_name: string;
    id: number;
    last_index: number;
    pendingErrors: $ReadOnlyArray<string>;
    type: "repeatable_field";
};
export type SelectOptionT = {
    label: string | "TODO: Support TypeNode FunctionTypeAnnotation";
    value: number | string;
};
export type SelectOptionsT = $ReadOnlyArray<SelectOptionT>;
