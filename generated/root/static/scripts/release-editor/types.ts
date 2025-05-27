// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { ArtistCreditT } from "../../../../declared-types.js"
import type { Observable as KnockoutObservable } from "knockout";
export type ReleaseEditorTrackT = {
    artistCredit: KnockoutObservable<ArtistCreditT>;
    entityType: "track";
    gid: string;
    id: number;
    name: KnockoutObservable<string>;
    next: "TODO: Support TypeNode FunctionTypeAnnotation";
    previous: "TODO: Support TypeNode FunctionTypeAnnotation";
};
