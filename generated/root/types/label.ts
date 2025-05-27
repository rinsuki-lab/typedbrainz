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
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type LabelT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"label">, $_$Spread<DatePeriodRoleT, $_$Spread<IpiCodesRoleT, $_$Spread<IsniCodesRoleT, $_$Spread<RatableRoleT, $_$Spread<ReviewableRoleT, $_$Spread<TypeRoleT<LabelTypeT>, {
    area: AreaT | null;
    label_code: number;
    primaryAlias?: string | null;
}>>>>>>>>>>;
export type LabelTypeT = OptionTreeT<"label_type">;
