// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { RelatableEntityRoleT } from "../../declared-types.js"
export type UrlT = RelatableEntityRoleT<"url"> & {
    decoded: string;
    href_url: string;
    pretty_name: string;
    show_in_external_links: boolean;
    show_license_in_sidebar: boolean;
    sidebar_name: string;
};
