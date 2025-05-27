// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { OptionTreeT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { DatePeriodRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
export type CoordinatesT = {
    latitude: number;
    longitude: number;
};
export type PlaceT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"place">, _$Spread<DatePeriodRoleT, _$Spread<RatableRoleT, _$Spread<ReviewableRoleT, _$Spread<TypeRoleT<PlaceTypeT>, {
    address: string;
    area: AreaT | null;
    coordinates: CoordinatesT | null;
    primaryAlias: string | null;
}>>>>>>>>;
export type PlaceTypeT = OptionTreeT<"place_type">;
