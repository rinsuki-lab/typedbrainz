// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
import { createContext as createContext } from "react";
import * as tree from "weight-balanced-tree";
import type { RelationshipSourceGroupsContextT as RelationshipSourceGroupsContextT } from "./types.js";
type REL_STATUS_NOOP_T = 0;
export const REL_STATUS_NOOP: REL_STATUS_NOOP_T = 0;
type REL_STATUS_ADD_T = 1;
export const REL_STATUS_ADD: REL_STATUS_ADD_T = 1;
type REL_STATUS_EDIT_T = 2;
export const REL_STATUS_EDIT: REL_STATUS_EDIT_T = 2;
type REL_STATUS_REMOVE_T = 3;
export const REL_STATUS_REMOVE: REL_STATUS_REMOVE_T = 3;
export type RelationshipEditStatusT = REL_STATUS_NOOP_T | REL_STATUS_ADD_T | REL_STATUS_EDIT_T | REL_STATUS_REMOVE_T;
export const EMPTY_DIALOG_PARTIAL_DATE = "WIP convertExpression: CallExpression";
export const EMPTY_DIALOG_DATE_PERIOD = "WIP convertExpression: CallExpression";
export const RelationshipSourceGroupsContext: React.Context<RelationshipSourceGroupsContextT> = "WIP convertExpression: CallExpression";
