// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { RelatableEntityTypeT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../../../../src/type-utils.js";
import ko from "knockout";
import { ENTITIES as ENTITIES } from "../constants.js";
"WIP convertAST: VariableDeclaration";
type LinkableEntity = {
    discid: string;
    entityType: "cdtoc";
} | {
    discid: string;
    entityType: "cdstub";
} | {
    entityType: "editor";
    name: string;
} | {
    entityType: "isrc";
    isrc: string;
} | {
    entityType: "iswc";
    iswc: string;
} | {
    entityType: RelatableEntityTypeT;
    gid: string;
} | {
    entityType: "collection";
    gid: string;
} | {
    entityType: "link_type";
    gid: string;
} | {
    entityType: "track";
    gid?: string;
};
"WIP convertAST: FunctionDeclaration";
"WIP convertAST_ExportNamedDeclaration: FunctionDeclaration";
"WIP convertAST: FunctionDeclaration";
export default entityHref;
