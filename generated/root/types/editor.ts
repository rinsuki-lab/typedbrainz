// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
type $ReadOnlyArray<T> = readonly T[];
type $ReadOnly<T> = Readonly<T>;
type $ReadOnlyMap<K, V> = ReadonlyMap<K, V>;
type $Exact<T> = T; // TODO: implement properly
type $Keys<T> = keyof T;
type $Values<T> = T[keyof T];
import { GenderT } from "../../declared-types.js"
import { PartialDateT } from "../../declared-types.js"
import { AreaT } from "../../declared-types.js"
import { LanguageT } from "../../declared-types.js"
import { EntityRoleT } from "../../declared-types.js"
export type ActiveEditorPreferencesT = {
    datetime_format: string;
    timezone: string;
};
export type ActiveEditorT = EntityRoleT<"editor"> & {
    avatar: string;
    has_confirmed_email_address: boolean;
    name: string;
    preferences: ActiveEditorPreferencesT;
    privileges: number;
};
export type EditorLanguageT = {
    fluency: FluencyT;
    language: LanguageT;
};
export type EditorT = EntityRoleT<"editor"> & {
    avatar: string;
    deleted: boolean;
    name: string;
    privileges: number;
};
export type FluencyT = "basic" | "intermediate" | "advanced" | "native";
export type UnsanitizedEditorPreferencesT = {
    datetime_format: string;
    email_on_abstain: boolean;
    email_on_no_vote: boolean;
    email_on_notes: boolean;
    email_on_vote: boolean;
    public_ratings: boolean;
    public_subscriptions: boolean;
    public_tags: boolean;
    subscribe_to_created_artists: boolean;
    subscribe_to_created_labels: boolean;
    subscribe_to_created_series: boolean;
    subscriptions_email_period: string;
    timezone: string;
};
export type UnsanitizedEditorT = $ReadOnly<EntityRoleT<"editor"> & {
    age: number | null;
    area: AreaT | null;
    avatar: string;
    biography: string | null;
    birth_date: PartialDateT | null;
    deleted: boolean;
    email: string | null;
    email_confirmation_date: string | null;
    gender: GenderT | null;
    has_confirmed_email_address: boolean;
    has_email_address: boolean;
    is_charter: boolean;
    languages: $ReadOnlyArray<EditorLanguageT> | null;
    last_login_date: string | null;
    name: string;
    preferences: UnsanitizedEditorPreferencesT;
    privileges: number;
    registration_date: string;
    website: string | null;
}>;
