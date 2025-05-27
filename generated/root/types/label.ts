// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
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
export type LabelT = $ReadOnly<AnnotationRoleT & CommentRoleT & RelatableEntityRoleT<"label"> & DatePeriodRoleT & IpiCodesRoleT & IsniCodesRoleT & RatableRoleT & ReviewableRoleT & TypeRoleT<LabelTypeT> & {
    area: AreaT | null;
    label_code: number;
    primaryAlias: string | null;
}>;
export type LabelTypeT = OptionTreeT<"label_type">;
