import type { RelationshipDialogStateT, RelationshipEditorStateT, ReleaseRelationshipEditorStateT } from "../generated/root/static/scripts/relationship-editor/types.js"
import type { DialogActionT, RelationshipEditorActionT, ReleaseRelationshipEditorActionT } from "../generated/root/static/scripts/relationship-editor/types/actions.js"
import type * as constants from "../generated/root/static/scripts/common/constants.js"

type EveryPropertyIsExistsOrNot<T> = T | {
    [K in keyof T]?: undefined | null
}

export type RelationshipEditorBase = EveryPropertyIsExistsOrNot<{
    relationshipDialogDispatch: (action: DialogActionT) => void,
    relationshipDialogState: RelationshipDialogStateT,
}>

export type ReleaseRelationshipEditor = RelationshipEditorBase & EveryPropertyIsExistsOrNot<{
    state: ReleaseRelationshipEditorStateT
    dispatch: (action: ReleaseRelationshipEditorActionT) => void
}>

export type NonReleaseRelationshipEditor = RelationshipEditorBase & EveryPropertyIsExistsOrNot<{
    state: RelationshipEditorStateT,
    dispatch: (action: RelationshipEditorActionT) => void
}>

export type MaybeReleaseRelationshipEditor = ReleaseRelationshipEditor | NonReleaseRelationshipEditor


declare global {
    var MB: undefined | {
        constants: typeof constants,
        relationshipEditor: MaybeReleaseRelationshipEditor
        /**
         * If you're on a relationship editor page, this should be available.
         */
        tree?: typeof import("weight-balanced-tree"),
    }
}