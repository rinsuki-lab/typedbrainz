// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { EditorT } from "../../declared-types.js"
import { CollectionT } from "../../declared-types.js"
import { TrackT } from "../../declared-types.js"
import { UrlT } from "../../declared-types.js"
import { RelationshipT } from "../../declared-types.js"
import { PagedTargetTypeGroupT } from "../../declared-types.js"
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
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type EntityWithAliasesT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type EntityWithAliasesTypeT = EntityWithAliasesT["entityType"];
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
export type RelatableEntityRoleT<T> = $_$Spread<EntityRoleT<T>, $_$Spread<LastUpdateRoleT, $_$Spread<PendingEditsRoleT, {
    gid: string;
    name: string;
    paged_relationship_groups?: {
        [targetType: RelatableEntityTypeT]: PagedTargetTypeGroupT | void;
    };
    relationships?: $ReadOnlyArray<RelationshipT>;
}>>>;
export type CollectableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type CollectableEntityTypeT = CollectableEntityT["entityType"];
export type EditableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | UrlT | WorkT;
export type EditableEntityTypeT = EditableEntityT["entityType"];
export type EntityWithArtistCreditsT = RecordingT | ReleaseGroupT | ReleaseT | TrackT;
export type EntityWithArtistCreditsTypeT = EntityWithArtistCreditsT["entityType"];
export type EntityWithAutoCleanupTypeT = "artist" | "event" | "label" | "place" | "release_group" | "series" | "work";
export type DatePeriodRoleT = {
    begin_date: PartialDateT | null;
    end_date: PartialDateT | null;
    ended: boolean;
};
export type ManuallyRemovableEntityT = AreaT | GenreT | InstrumentT | RecordingT | ReleaseT;
export type MergeableEntityT = AreaT | ArtistT | CollectionT | EventT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type MergeableEntityTypeT = MergeableEntityT["entityType"];
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
    day?: number | null | undefined;
    month?: number | null | undefined;
    year?: number | null | undefined;
};
export type PartialDateStringsT = {
    day?: string;
    month?: string;
    year?: string;
};
export type NonUrlRelatableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type RelatableEntityT = NonUrlRelatableEntityT | UrlT;
export type NonUrlRelatableEntityTypeT = NonUrlRelatableEntityT["entityType"];
export type RelatableEntityTypeT = NonUrlRelatableEntityTypeT | "url";
export type SubscribableEntityT = SubscribableEntityWithSidebarT | CollectionT | EditorT;
export type SubscribableEntityWithSidebarT = ArtistT | LabelT | SeriesT;
export type SubscribableEntityTypeT = SubscribableEntityT["entityType"];
export type TaggableEntityT = AreaT | ArtistT | EventT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | ReleaseT | SeriesT | WorkT;
export type TaggableEntityTypeT = TaggableEntityT["entityType"];
export type TypeRoleT<T> = {
    typeID: number | null;
    typeName?: string;
};
export type WikipediaExtractT = {
    content: string;
    url: string;
};
