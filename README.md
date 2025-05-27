# typedbrainz

very WIP, but I wanted to automatically generate TypeScript typing files from MusicBrainz source code.

## Example

```typescript
import { isReleaseRelationshipEditor } from "typedbrainz";

function currentReleaseName(): string | null {
    const relationshipEditor = window.MB?.relationshipEditor;
    if (relationshipEditor == null) return null
    if (!isReleaseRelationshipEditor(relationshipEditor)) return null
    return relationshipEditor.state.entity.name;
}
```

## LICENSE

* `converter/**`: see `SPDX-License-Identifier`
* `generated/**`: same as upstream `musicbrainz-server`