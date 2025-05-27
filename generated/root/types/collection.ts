// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { OptionTreeT } from "../../declared-types.js"
import { CollectableEntityTypeT } from "../../declared-types.js"
import { EditorT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
export type CollectionT = $ReadOnly<_$Spread<EntityRoleT<"collection">, _$Spread<TypeRoleT<CollectionTypeT>, {
    collaborators: $ReadOnlyArray<EditorT>;
    description: string;
    description_html: string;
    editor: EditorT | null;
    entity_count: number;
    gid: string;
    item_entity_type: CollectableEntityTypeT;
    name: string;
    public: boolean;
    subscribed: boolean;
}>>>;
export type CollectionTypeT = _$Spread<OptionTreeT<"collection_type">, {
    item_entity_type: string;
}>;
