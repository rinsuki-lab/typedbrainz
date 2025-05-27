// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type CollectionT = $ReadOnly<EntityRoleT<"collection"> & TypeRoleT<CollectionTypeT> & {
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
}>;
export type CollectionTypeT = OptionTreeT<"collection_type"> & {
    item_entity_type: string;
};
