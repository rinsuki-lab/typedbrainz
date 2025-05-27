// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
import { EditorT } from "../../declared-types.js"
import { CollectionT } from "../../declared-types.js"
import { TrackT } from "../../declared-types.js"
import { UrlT } from "../../declared-types.js"
import { RelationshipT } from "../../declared-types.js"
import { RecordingWithArtistCreditT } from "../../declared-types.js"
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
export type EntityWithAliasesT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type EntityWithAliasesTypeT = "TODO: Support TypeNode IndexedAccessType";
export type EntityWithSeriesMapT = {
    "artist": ArtistT;
    "event": EventT;
    "recording": RecordingWithArtistCreditT;
    "release": ReleaseT;
    "release_group": ReleaseGroupT;
    "work": WorkT;
};
export type EntityWithSeriesT = $Values<EntityWithSeriesMapT>;
export type EntityWithSeriesTypeT = $Keys<EntityWithSeriesMapT>;
export type AppearancesT<T> = {
    hits: number;
    results: $ReadOnlyArray<T>;
};
export type CommentRoleT = {
    comment: string;
};
export type RelatableEntityRoleT<T> = EntityRoleT<T> & LastUpdateRoleT & PendingEditsRoleT & {
    gid: string;
    name: string;
    paged_relationship_groups: {};
    relationships: $ReadOnlyArray<RelationshipT>;
};
export type CollectableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type CollectableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type EditableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | UrlT | WorkT;
export type EditableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type EntityWithArtistCreditsT = RecordingT | ReleaseGroupT | ReleaseT | TrackT;
export type EntityWithArtistCreditsTypeT = "TODO: Support TypeNode IndexedAccessType";
export type EntityWithAutoCleanupTypeT = "artist" | "event" | "label" | "place" | "release_group" | "series" | "work";
export type DatePeriodRoleT = {
    begin_date: PartialDateT | null;
    end_date: PartialDateT | null;
    ended: boolean;
};
export type ManuallyRemovableEntityT = AreaT | GenreT | InstrumentT | RecordingT | ReleaseT;
export type MergeableEntityT = AreaT | ArtistT | CollectionT | EventT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type MergeableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type PendingEditsRoleT = {
    editsPending: boolean;
};
export type EntityRoleT<T> = {
    entityType: T;
    id: number;
};
export type LastUpdateRoleT = {
    last_updated: string | null;
};
export type MinimalEntityT = {
    entityType: string;
    gid: string;
};
export type PartialDateT = {
    day: "TODO: Support TypeNode NullableTypeAnnotation";
    month: "TODO: Support TypeNode NullableTypeAnnotation";
    year: "TODO: Support TypeNode NullableTypeAnnotation";
};
export type PartialDateStringsT = {
    day: string;
    month: string;
    year: string;
};
export type NonUrlRelatableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type RelatableEntityT = NonUrlRelatableEntityT | UrlT;
export type NonUrlRelatableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type RelatableEntityTypeT = NonUrlRelatableEntityTypeT | "url";
export type SubscribableEntityT = SubscribableEntityWithSidebarT | CollectionT | EditorT;
export type SubscribableEntityWithSidebarT = ArtistT | LabelT | SeriesT;
export type SubscribableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type TaggableEntityT = AreaT | ArtistT | EventT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type TaggableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type TypeRoleT<T> = {
    typeID: number | null;
    typeName: string;
};
export type WikipediaExtractT = {
    content: string;
    url: string;
};
