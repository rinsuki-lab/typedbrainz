// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { ReleaseArtT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { ArtistCreditRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
import { OptionTreeT } from "../../declared-types.js"
export type ReleaseGroupSecondaryTypeT = OptionTreeT<"release_group_secondary_type">;
export type ReleaseGroupT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<ArtistCreditRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"release_group">, _$Spread<RatableRoleT, _$Spread<ReviewableRoleT, _$Spread<TypeRoleT<ReleaseGroupTypeT>, {
    cover_art: ReleaseArtT;
    firstReleaseDate: string | null;
    hasCoverArt: boolean;
    l_type_name: string | null;
    primaryAlias: string | null;
    release_count: number;
    release_group: ReleaseGroupT;
    secondaryTypeIDs: $ReadOnlyArray<number>;
    typeID: number | null;
    typeName: string | null;
}>>>>>>>>;
export type ReleaseGroupTypeT = _$Spread<OptionTreeT<"release_group_type">, {
    historic: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
}>;
export type ReleaseGroupHistoricTypeT = {
    historic: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
    id: number;
    name: string;
};
