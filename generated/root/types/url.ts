// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type UrlT = _$Spread<RelatableEntityRoleT<"url">, {
    decoded: string;
    href_url: string;
    pretty_name: string;
    show_in_external_links: boolean;
    show_license_in_sidebar: boolean;
    sidebar_name: string;
}>;
