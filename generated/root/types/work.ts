// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { LanguageT } from "../../declared-types.js"
import { OptionTreeT } from "../../declared-types.js"
import { AppearancesT } from "../../declared-types.js"
import { IswcT } from "../../declared-types.js"
import { ArtistT } from "../../declared-types.js"
import { WorkAttributeT } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { TypeRoleT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
export type WorkT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"work">, _$Spread<RatableRoleT, _$Spread<ReviewableRoleT, _$Spread<TypeRoleT<WorkTypeT>, {
    _fromBatchCreateWorksDialog: boolean;
    artists: $ReadOnlyArray<ArtistCreditT>;
    attributes: $ReadOnlyArray<WorkAttributeT>;
    authors: $ReadOnlyArray<{
        credit: string;
        entity: ArtistT;
        roles: $ReadOnlyArray<string>;
    }>;
    iswcs: $ReadOnlyArray<IswcT>;
    languages: $ReadOnlyArray<WorkLanguageT>;
    other_artists: $ReadOnlyArray<{
        credit: string;
        entity: ArtistT;
        roles: $ReadOnlyArray<string>;
    }>;
    primaryAlias: string | null;
    related_artists: {
        artists: AppearancesT<string>;
        authors: AppearancesT<string>;
    };
}>>>>>>>;
export type WorkTypeT = OptionTreeT<"work_type">;
export type WorkLanguageT = {
    language: LanguageT;
};
