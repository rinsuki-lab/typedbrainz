// SPDX-License-Identifier: GPLv2-or-later
// Inherited from MB, because this file depends to MB's code.

import type { RelationshipDialogStateT, RelationshipEditorStateT, ReleaseRelationshipEditorStateT } from "../generated/root/static/scripts/relationship-editor/types.ts"
import type { DialogActionT, RelationshipEditorActionT, ReleaseRelationshipEditorActionT } from "../generated/root/static/scripts/relationship-editor/types/actions.ts"
import type * as constants from "../generated/root/static/scripts/common/constants.ts"
import type { LinkedEntitiesT } from "../generated/root/static/scripts/common/linkedEntities.mts"
import type { RelationshipT } from "../generated/declared-types.ts"
import type { SeededRelationshipT } from "../generated/declared-types.ts"

type EveryPropertyIsExistsOrNot<T> = T | {
    [K in keyof T]?: undefined | null
}

export type RelationshipEditorBase = EveryPropertyIsExistsOrNot<{
    relationshipDialogDispatch: (action: DialogActionT) => void,
    relationshipDialogState: RelationshipDialogStateT,
}> & {
    getRelationshipStateId: (relationship: RelationshipT | SeededRelationshipT | null) => number
}

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
        linkedEntities: LinkedEntitiesT,
    }
}