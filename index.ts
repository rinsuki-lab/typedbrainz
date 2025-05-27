import { RelationshipDialogStateT, RelationshipEditorStateT, ReleaseRelationshipEditorStateT } from "./generated/root/static/scripts/relationship-editor/types.js"
import { RelationshipEditorActionT, ReleaseRelationshipEditorActionT } from "./generated/root/static/scripts/relationship-editor/types/actions.js"

type EveryPropertyIsExistsOrNot<T> = T | {
    [K in keyof T]?: undefined | null
}

type EveryPropertyIsExists<T> = {
    [K in keyof T]-?: T[K] extends undefined | null ? never : T[K]
}

type RelationshipEditorBase = EveryPropertyIsExistsOrNot<{
    relationshipDialogDispatch: RelationshipDialogStateT,
    relationshipDialogState: RelationshipDialogStateT,
}>

type ReleaseRelationshipEditor = RelationshipEditorBase & EveryPropertyIsExistsOrNot<{
    state: ReleaseRelationshipEditorStateT
    dispatch: (action: ReleaseRelationshipEditorActionT) => void
}>

type NonReleaseRelationshipEditor = RelationshipEditorBase & EveryPropertyIsExistsOrNot<{
    state: RelationshipEditorStateT,
    dispatch: (action: RelationshipEditorActionT) => void
}>

type MaybeReleaseRelationshipEditor = ReleaseRelationshipEditor | NonReleaseRelationshipEditor

declare global {
    var MB: undefined | {
        relationshipEditor: MaybeReleaseRelationshipEditor
    }
}

export function isReleaseRelationshipEditor(relationshipEditor: MaybeReleaseRelationshipEditor): relationshipEditor is EveryPropertyIsExists<ReleaseRelationshipEditor> {
    return relationshipEditor.state?.entity.entityType === "release";
}

export function isNonReleaseRelationshipEditor(relationshipEditor: MaybeReleaseRelationshipEditor): relationshipEditor is EveryPropertyIsExists<NonReleaseRelationshipEditor> {
    return relationshipEditor.state?.entity.entityType !== "release";
}