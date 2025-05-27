// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
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
