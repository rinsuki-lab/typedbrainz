// SPDX-License-Identifier: GPLv2-or-later
// Inherited from MB, because this file depends to MB's code.

import { MaybeReleaseRelationshipEditor, NonReleaseRelationshipEditor, RelationshipEditorBase, ReleaseRelationshipEditor } from "./global.js"

type EveryPropertyIsExists<T> = {
    [K in keyof T]-?: T[K] extends undefined | null ? never : T[K]
}

export function isReleaseRelationshipEditor(relationshipEditor: MaybeReleaseRelationshipEditor): relationshipEditor is RelationshipEditorBase & EveryPropertyIsExists<ReleaseRelationshipEditor> {
    return relationshipEditor.state?.entity.entityType === "release";
}

export function isNonReleaseRelationshipEditor(relationshipEditor: MaybeReleaseRelationshipEditor): relationshipEditor is RelationshipEditorBase & EveryPropertyIsExists<NonReleaseRelationshipEditor> {
    return relationshipEditor.state?.entity.entityType !== "release";
}