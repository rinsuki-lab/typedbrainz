// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type AutoEditorElectionT = EntityRoleT<"TODO: Support TypeNode EmptyTypeAnnotation"> & {
    candidate: EditorT;
    close_time: string;
    current_expiration_time: string;
    is_closed: boolean;
    is_open: boolean;
    is_pending: boolean;
    no_votes: number;
    open_time: string;
    propose_time: string;
    proposer: EditorT;
    seconder_1: EditorT;
    seconder_2: EditorT;
    status_name: string;
    status_name_short: string;
    votes: $ReadOnlyArray<AutoEditorElectionVoteT>;
    yes_votes: number;
};
export type AutoEditorElectionVoteT = EntityRoleT<"TODO: Support TypeNode EmptyTypeAnnotation"> & {
    vote_name: string;
    vote_time: string;
    voter: EditorT;
};
