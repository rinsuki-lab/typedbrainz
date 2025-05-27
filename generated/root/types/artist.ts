// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { OptionTreeT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { IsniCodesRoleT } from "../../declared-types.js"
import { IpiCodesRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../src/type-utils.js";
export type ArtistT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"artist">, _$Spread<DatePeriodRoleT, _$Spread<IpiCodesRoleT, _$Spread<IsniCodesRoleT, _$Spread<RatableRoleT, _$Spread<ReviewableRoleT, _$Spread<TypeRoleT<ArtistTypeT>, {
    area: AreaT | null;
    begin_area: AreaT | null;
    begin_area_id: number | null;
    end_area: AreaT | null;
    end_area_id: number | null;
    gender: GenderT | null;
    gender_id: number | null;
    primaryAlias: string | null;
    sort_name: string;
}>>>>>>>>>>;
export type ArtistTypeT = OptionTreeT<"artist_type">;
export type GenderT = OptionTreeT<"gender">;
