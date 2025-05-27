// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EditorT } from "../../declared-types.js"
import { WorkT } from "../../declared-types.js"
import { SeriesT } from "../../declared-types.js"
import { ReleaseT } from "../../declared-types.js"
import { ReleaseGroupT } from "../../declared-types.js"
import { RecordingT } from "../../declared-types.js"
import { PlaceT } from "../../declared-types.js"
import { LabelT } from "../../declared-types.js"
import { InstrumentT } from "../../declared-types.js"
import { GenreT } from "../../declared-types.js"
import { EventT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type AnnotatedEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type AnnotatedEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type AnnotationRoleT = {
    latest_annotation: AnnotationT;
};
export type AnnotationT = {
    changelog: string;
    creation_date: string;
    editor: EditorT | null;
    html: string;
    id: number;
    parent: AnnotatedEntityT | null;
    text: string | null;
};
