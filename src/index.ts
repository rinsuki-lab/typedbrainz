// SPDX-License-Identifier: MIT

import type { MaybeReleaseRelationshipEditor, NonReleaseRelationshipEditor, RelationshipEditorBase, ReleaseRelationshipEditor } from "./global.js";
import { $_$Spread } from "./type-utils.js";

type EveryPropertyIsExists<T> = {
    [K in keyof T]-?: T[K] extends undefined | null ? never : T[K]
}

export function isReleaseRelationshipEditor(relationshipEditor: MaybeReleaseRelationshipEditor): relationshipEditor is $_$Spread<EveryPropertyIsExists<ReleaseRelationshipEditor>, RelationshipEditorBase> {
    return relationshipEditor.state?.entity.entityType === "release";
}

export function isNonReleaseRelationshipEditor(relationshipEditor: MaybeReleaseRelationshipEditor): relationshipEditor is $_$Spread<EveryPropertyIsExists<NonReleaseRelationshipEditor>, RelationshipEditorBase> {
    return relationshipEditor.state?.entity.entityType !== "release";
}