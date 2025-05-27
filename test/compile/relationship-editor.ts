import { isNonReleaseRelationshipEditor, isReleaseRelationshipEditor } from "../../src/index.js"

if (MB == null) throw new Error("MB is not defined");

if (isReleaseRelationshipEditor(MB.relationshipEditor)) {
    MB.relationshipEditor.dispatch({
        type: "toggle-select-all-works",
        isSelected: false,
    })
} else if (isNonReleaseRelationshipEditor(MB.relationshipEditor)) {
    MB.relationshipEditor.dispatch({
        // @ts-expect-error
        type: "toggle-select-all-works",
    })
} else {
    // @ts-expect-error
    MB.relationshipEditor.dispatch({
        type: "move-relationship-down"
    })
}

