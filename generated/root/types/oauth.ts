// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EditorT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type ApplicationT = $_$Spread<EntityRoleT<"application">, {
    is_server: boolean;
    name: string;
    oauth_id: string;
    oauth_redirect_uri?: string;
    oauth_secret: string;
    oauth_type: string;
}>;
export type EditorOAuthTokenT = $_$Spread<EntityRoleT<"WIP convertTypeNode: EmptyTypeAnnotation">, {
    application: ApplicationT;
    editor: EditorT | null;
    granted: string;
    is_offline: boolean;
    permissions: $ReadOnlyArray<string>;
    scope: number;
}>;
