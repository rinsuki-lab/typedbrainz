// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { StrOrNum } from "../../declared-types.js"
import { RepeatableFieldT } from "../../declared-types.js"
import { CompoundFieldT } from "../../declared-types.js"
import { FieldT } from "../../declared-types.js"
import { FormT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type ConfirmFormT = FormT<{
    cancel: FieldT<string>;
    edit_note: FieldT<string>;
    make_votable: FieldT<boolean>;
    submit: FieldT<string>;
}>;
export type TextListItemFieldT = CompoundFieldT<{
    removed: FieldT<boolean>;
    value: FieldT<string>;
}>;
export type TextListFieldT = RepeatableFieldT<TextListItemFieldT>;
export type MediumFieldT = CompoundFieldT<{
    id: FieldT<number>;
    name: FieldT<string>;
    position: FieldT<number>;
    release_id: FieldT<number>;
}>;
export type MergeFormT = FormT<{
    edit_note: FieldT<string>;
    make_votable: FieldT<boolean>;
    merging: RepeatableFieldT<FieldT<number>>;
    rename: FieldT<boolean>;
    target: FieldT<number>;
}>;
export type MergeReleasesFormT = FormT<{
    edit_note: FieldT<string>;
    make_votable: FieldT<boolean>;
    medium_positions: CompoundFieldT<{
        map: CompoundFieldT<$ReadOnlyArray<MediumFieldT | "TODO: Support TypeNode VoidTypeAnnotation">>;
    }>;
    merge_rgs: FieldT<boolean>;
    merge_strategy: FieldT<StrOrNum>;
    merging: RepeatableFieldT<FieldT<StrOrNum>>;
    rename: FieldT<boolean>;
    target: FieldT<StrOrNum>;
}>;
export type SearchFormT = FormT<{
    limit: FieldT<number>;
    method: FieldT<"advanced" | "direct" | "indexed">;
    query: FieldT<string>;
    type: FieldT<string>;
}>;
export type SecureConfirmFormT = FormT<{
    cancel: FieldT<string>;
    csrf_token: FieldT<string>;
    submit: FieldT<string>;
}>;
export type TagLookupFormT = FormT<{
    artist: FieldT<string>;
    duration: FieldT<string>;
    filename: FieldT<string>;
    release: FieldT<string>;
    track: FieldT<string>;
    tracknum: FieldT<string>;
}, "tag-lookup">;
