// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
export type EventT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"event"> & DatePeriodRoleT & RatableRoleT & ReviewableRoleT & TypeRoleT<EventTypeT> & {
    areas: $ReadOnlyArray<{
        credit: string;
        entity: AreaT;
    }>;
    cancelled: boolean;
    event_art_presence: "absent" | "present" | "darkened" | null;
    may_have_event_art: boolean;
    performers: $ReadOnlyArray<{
        credit: string;
        entity: ArtistT;
        roles: $ReadOnlyArray<string>;
    }>;
    places: $ReadOnlyArray<{
        credit: string;
        entity: PlaceT;
    }>;
    primaryAlias: string | null;
    related_entities: {
        areas: AppearancesT<string>;
        performers: AppearancesT<string>;
        places: AppearancesT<string>;
    };
    related_series: $ReadOnlyArray<number>;
    setlist: string;
    time: string;
}>;
export type EventTypeT = OptionTreeT<"event_type">;
