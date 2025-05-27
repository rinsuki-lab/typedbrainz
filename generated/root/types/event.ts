// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { AppearancesT } from "../../declared-types.js"
import { PlaceT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type EventT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"event">, _$Spread<DatePeriodRoleT, _$Spread<RatableRoleT, _$Spread<ReviewableRoleT, _$Spread<TypeRoleT<EventTypeT>, {
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
}>>>>>>>>;
export type EventTypeT = OptionTreeT<"event_type">;
