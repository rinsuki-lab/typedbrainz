// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { EditorT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
export type ApplicationT = EntityRoleT<"application"> & {
    is_server: boolean;
    name: string;
    oauth_id: string;
    oauth_redirect_uri: string;
    oauth_secret: string;
    oauth_type: string;
};
export type EditorOAuthTokenT = EntityRoleT<"TODO: Support TypeNode EmptyTypeAnnotation"> & {
    application: ApplicationT;
    editor: EditorT | null;
    granted: string;
    is_offline: boolean;
    permissions: $ReadOnlyArray<string>;
    scope: number;
};
