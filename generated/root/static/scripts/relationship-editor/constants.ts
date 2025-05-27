// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { createContext as createContext } from "react";
import type { RelationshipSourceGroupsContextT as RelationshipSourceGroupsContextT } from "./types.js";
export type RelationshipEditStatusT = number & {
    __OpaqueType__RelationshipEditStatusT: never;
};
export const REL_STATUS_NOOP: RelationshipEditStatusT = 0;
export const REL_STATUS_ADD: RelationshipEditStatusT = 1;
export const REL_STATUS_EDIT: RelationshipEditStatusT = 2;
export const REL_STATUS_REMOVE: RelationshipEditStatusT = 3;
export const EMPTY_DIALOG_PARTIAL_DATE = "Unknown Expression Type: CallExpression";
export const EMPTY_DIALOG_DATE_PERIOD = "Unknown Expression Type: CallExpression";
export const RelationshipSourceGroupsContext: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" = "Unknown Expression Type: CallExpression";
