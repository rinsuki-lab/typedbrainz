// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
type _$Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
import { ReleaseGroupT } from "../../declared-types.js"
import { IsrcT } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { ArtistCreditT } from "../../declared-types.js"
import { AppearancesT } from "../../declared-types.js"
import { ReviewableRoleT } from "../../declared-types.js"
import { RatableRoleT } from "../../declared-types.js"
import { RelatableEntityRoleT } from "../../declared-types.js"
import { CommentRoleT } from "../../declared-types.js"
import { AnnotationRoleT } from "../../declared-types.js"
export type RecordingT = $ReadOnly<_$Spread<AnnotationRoleT, _$Spread<CommentRoleT, _$Spread<RelatableEntityRoleT<"recording">, _$Spread<RatableRoleT, _$Spread<ReviewableRoleT, {
    appearsOn: AppearancesT<{
        gid: string;
        name: string;
    }>;
    artist: string;
    artistCredit: ArtistCreditT;
    first_release_date: PartialDateT;
    isrcs: $ReadOnlyArray<IsrcT>;
    length: number;
    primaryAlias: string | null;
    related_works: $ReadOnlyArray<number>;
    video: boolean;
}>>>>>>;
export type RecordingWithArtistCreditT = $ReadOnly<_$Spread<RecordingT, {
    artistCredit: ArtistCreditT;
}>>;
export type ReleaseGroupAppearancesT = {
    hits: number;
    results: $ReadOnlyArray<ReleaseGroupT>;
};
export type ReleaseGroupAppearancesMapT = {};
