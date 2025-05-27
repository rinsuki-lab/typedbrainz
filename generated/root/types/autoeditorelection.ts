// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EditorT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type AutoEditorElectionT = $_$Spread<EntityRoleT<"WIP convertTypeNode: EmptyTypeAnnotation">, {
    candidate: EditorT;
    close_time?: string;
    current_expiration_time: string;
    is_closed: boolean;
    is_open: boolean;
    is_pending: boolean;
    no_votes: number;
    open_time?: string;
    propose_time: string;
    proposer: EditorT;
    seconder_1?: EditorT;
    seconder_2?: EditorT;
    status_name: string;
    status_name_short: string;
    votes: $ReadOnlyArray<AutoEditorElectionVoteT>;
    yes_votes: number;
}>;
export type AutoEditorElectionVoteT = $_$Spread<EntityRoleT<"WIP convertTypeNode: EmptyTypeAnnotation">, {
    vote_name: string;
    vote_time: string;
    voter: EditorT;
}>;
