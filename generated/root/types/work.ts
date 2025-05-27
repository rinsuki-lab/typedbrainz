// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
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
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, $_$Spread } from "../../../src/type-utils.js";
export type WorkT = $ReadOnly<$_$Spread<AnnotationRoleT, $_$Spread<CommentRoleT, $_$Spread<RelatableEntityRoleT<"work">, $_$Spread<RatableRoleT, $_$Spread<ReviewableRoleT, $_$Spread<TypeRoleT<WorkTypeT>, {
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
