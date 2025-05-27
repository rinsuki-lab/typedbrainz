// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { VoteT } from "../../declared-types.js"
import { QualityT } from "../../declared-types.js"
import { EditorT } from "../../declared-types.js"
import { HistoricEditT } from "../../declared-types.js"
import { CurrentEditT } from "../../declared-types.js"
export type CompT<T> = {
    new: T;
    old: T;
};
export type DiffChangeTypeT = "+" | "-" | "c" | "u";
export type EditExpireActionT = "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation";
export type EditStatusT = "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation" | "TODO: Support TypeNode NumberLiteralTypeAnnotation";
export type EditT = CurrentEditT | HistoricEditT;
export type EditWithIdT = $ReadOnly<EditT & {
    id: number;
}>;
export type EditNoteChangeT = {
    change_editor_id: number;
    change_time: string;
    edit_note_id: number;
    id: number;
    new_note: string;
    old_note: string;
    reason: string;
    status: "edited" | "deleted";
};
export type EditNoteT = {
    edit_id: number;
    editor: EditorT | null;
    editor_id: number;
    formatted_text: string;
    id: number;
    latest_change: EditNoteChangeT;
    post_time: string | null;
};
export type GenericEditT = {
    auto_edit: boolean;
    close_time: string;
    conditions: {
        auto_edit: boolean;
        duration: number;
        expire_action: EditExpireActionT;
        votes: number;
    };
    created_time: string;
    data: {};
    edit_kind: "add" | "edit" | "remove" | "merge" | "other";
    edit_name: string;
    edit_notes: $ReadOnlyArray<EditNoteT>;
    edit_type: number;
    edit_type_name_context: string;
    editor_id: number;
    expires_time: string;
    historic_type: number | null;
    id: number | null;
    is_loaded: boolean;
    is_open: boolean;
    preview: boolean;
    quality: QualityT;
    status: EditStatusT;
    votes: $ReadOnlyArray<VoteT>;
};
export type GenericEditWithIdT = $ReadOnly<GenericEditT & {
    id: number;
}>;
