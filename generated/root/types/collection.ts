// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { CollectableEntityTypeT } from "../../declared-types.js"
import { EditorT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type CollectionT = $ReadOnly<$_$Spread<EntityRoleT<"collection">, $_$Spread<TypeRoleT<CollectionTypeT>, {
    collaborators: $ReadOnlyArray<EditorT>;
    description: string;
    description_html: string;
    editor: EditorT | null;
    entity_count: number;
    gid: string;
    item_entity_type?: CollectableEntityTypeT;
    name: string;
    public: boolean;
    subscribed?: boolean;
}>>>;
export type CollectionTypeT = $_$Spread<OptionTreeT<"collection_type">, {
    item_entity_type: string;
}>;
