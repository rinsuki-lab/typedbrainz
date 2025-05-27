// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../../../src/type-utils.js";
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
