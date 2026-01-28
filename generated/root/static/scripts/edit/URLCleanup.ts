// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityTypeT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../src/type-utils.js";
import $ from "jquery";
import { parse as tldtsParse } from "tldts";
import { arraysEqual as arraysEqual } from "../common/utility/arrays.js";
type EntityTypes = string | $ReadOnlyArray<string>;
type EntityTypesMap = {
    [entityType: RelatableEntityTypeT]: EntityTypes;
};
type EntityTypeMap = {
    [entityType: RelatableEntityTypeT]: string;
};
type LinkTypeMap = {
    [type: string]: EntityTypeMap;
};
export type RelationshipTypeT = string | $ReadOnlyArray<string>;
export const LINK_TYPES: LinkTypeMap = "WIP convertExpression: ObjectExpression";
export const RESTRICTED_LINK_TYPES: $ReadOnlyArray<string> = "WIP convertExpression: CallExpression";
export const ERROR_TARGETS = "WIP convertExpression: ObjectExpression";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: VariableDeclaration";
type ValidationResult = {
    error?: React.ReactNode;
    result: boolean;
    target?: $Values<"WIP convertTypeNode: TypeofTypeAnnotation">;
};
type CleanupEntry = {
    clean?: "WIP convertTypeNode: FunctionTypeAnnotation";
    hostname: string | $ReadOnlyArray<string>;
    match: $ReadOnlyArray<RegExp>;
    restrict?: $ReadOnlyArray<EntityTypesMap>;
    select?: "WIP convertTypeNode: FunctionTypeAnnotation";
    validate?: "WIP convertTypeNode: FunctionTypeAnnotation";
};
type CleanupEntries = {
    [type: string]: CleanupEntry;
};
export const CLEANUPS: CleanupEntries = "WIP convertExpression: ObjectExpression";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: FunctionDeclaration";
export const CLEANUP_ENTRIES_BY_HOSTNAME: {
    [hostname: string]: $ReadOnlyArray<CleanupEntry>;
} = "WIP convertExpression: CallExpression";
"WIP convertAST: VariableDeclaration";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: ExpressionStatement";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: ClassDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
