// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { FormT } from "../../../../declared-types.js"
import { FieldT } from "../../../../declared-types.js"
import { MediumWithRecordingsT } from "../../../../declared-types.js"
import { ReleaseWithMediumsT } from "../../../../declared-types.js"
import { LanguageT } from "../../../../declared-types.js"
import { NonUrlRelatableEntityT } from "../../../../declared-types.js"
import { DatePeriodRoleT } from "../../../../declared-types.js"
import { DatePeriodFieldT } from "../../../../declared-types.js"
import { LinkAttrTypeT } from "../../../../declared-types.js"
import { LinkTypeT } from "../../../../declared-types.js"
import { TrackWithRecordingT } from "../../../../declared-types.js"
import { RelatableEntityTypeT } from "../../../../declared-types.js"
import { WorkT } from "../../../../declared-types.js"
import { UrlT } from "../../../../declared-types.js"
import { SeriesT } from "../../../../declared-types.js"
import { ReleaseGroupT } from "../../../../declared-types.js"
import { RecordingT } from "../../../../declared-types.js"
import { PlaceT } from "../../../../declared-types.js"
import { LabelT } from "../../../../declared-types.js"
import { InstrumentT } from "../../../../declared-types.js"
import { GenreT } from "../../../../declared-types.js"
import { EventT } from "../../../../declared-types.js"
import { ArtistT } from "../../../../declared-types.js"
import { AreaT } from "../../../../declared-types.js"
import { PartialDateT } from "../../../../declared-types.js"
import { RelatableEntityT } from "../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../../../src/type-utils.js";
import * as tree from "weight-balanced-tree";
import type { OptionItemT as AutocompleteOptionItemT, StateT as AutocompleteStateT } from "../common/components/Autocomplete2/types.js";
import type { LazyReleaseStateT as LazyReleaseStateT } from "../release/types.js";
import type { RelationshipEditStatusT as RelationshipEditStatusT } from "./constants.js";
export type CreditChangeOptionT = "" | "all" | "same-entity-types" | "same-relationship-type";
export type RelationshipStateForTypesT<T0 extends RelatableEntityT, T1 extends RelatableEntityT> = {
    _lineage: $ReadOnlyArray<string>;
    _original: RelationshipStateT | null;
    _status: RelationshipEditStatusT;
    attributes: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
    begin_date: PartialDateT | null;
    editsPending: boolean;
    end_date: PartialDateT | null;
    ended: boolean;
    entity0: T0;
    entity0_credit: string;
    entity1: T1;
    entity1_credit: string;
    id: number;
    linkOrder: number;
    linkTypeID: number | null;
};
export type RelationshipStateT = RelationshipStateForTypesT<RelatableEntityT, RelatableEntityT>;
export type RelationshipPhraseGroupT = {
    relationships: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
    textPhrase: string;
};
export type RelationshipLinkTypeGroupT = {
    backward: boolean;
    phraseGroups: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
    typeId: number;
};
export type RelationshipLinkTypeGroupKeyT = {
    backward: boolean;
    typeId: number;
};
export type RelationshipLinkTypeGroupsT = "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
export type RelationshipTargetTypeGroupT = "WIP convertTypeNode: TupleTypeAnnotation";
export type RelationshipTargetTypeGroupsT = "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
export type RelationshipSourceGroupT = "WIP convertTypeNode: TupleTypeAnnotation";
export type RelationshipSourceGroupsT = "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
export type NonReleaseRelatableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | SeriesT | UrlT | WorkT;
export type NonReleaseRelatableEntityTypeT = NonReleaseRelatableEntityT["entityType"];
export type RelationshipDialogLocationT = {
    backward: boolean | null | undefined;
    batchSelection: boolean | null | undefined;
    linkTypeId: number | null | undefined;
    relationshipId: number | null | undefined;
    source: RelatableEntityT;
    targetType: RelatableEntityTypeT | null | undefined;
    textPhrase: string | null | undefined;
    track: TrackWithRecordingT | null | undefined;
};
export type RelationshipEditorStateT = {
    dialogLocation: RelationshipDialogLocationT | null;
    entity: NonReleaseRelatableEntityT;
    existingRelationshipsBySource: RelationshipSourceGroupsT;
    reducerError: Error | null;
    relationshipsBySource: RelationshipSourceGroupsT;
};
export type RelationshipDialogStateT = {
    attributes: DialogAttributesStateT;
    backward: boolean;
    datePeriod: DialogDatePeriodStateT;
    isHelpVisible: boolean;
    linkOrder: number;
    linkType: DialogLinkTypeStateT;
    sourceEntity: DialogSourceEntityStateT;
    targetEntity: DialogTargetEntityStateT;
};
export type DialogBooleanAttributeStateT = $ReadOnly<_$Spread<DialogLinkAttributeStateT, {
    control: "checkbox";
    enabled: boolean;
}>>;
export type DialogMultiselectAttributeStateT = $ReadOnly<_$Spread<DialogLinkAttributeStateT, {
    control: "multiselect";
    linkType: LinkTypeT;
    values: $ReadOnlyArray<DialogMultiselectAttributeValueStateT>;
}>>;
export type DialogMultiselectAttributeValueStateT = {
    autocomplete: AutocompleteStateT<LinkAttrTypeT>;
    control: "multiselect-value";
    creditedAs: string;
    error: string;
    key: number;
    removed: boolean;
};
export type DialogTextAttributeStateT = $ReadOnly<_$Spread<DialogLinkAttributeStateT, {
    control: "text";
    textValue: string;
}>>;
export type DialogAttributeT = DialogBooleanAttributeStateT | DialogMultiselectAttributeStateT | DialogTextAttributeStateT;
export type DialogAttributesT = $ReadOnlyArray<DialogAttributeT>;
export type DialogAttributesStateT = {
    attributesList: DialogAttributesT;
    resultingLinkAttributes: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
};
export type DialogLinkAttributeStateT = {
    creditedAs: string;
    error: string;
    key: number;
    max: number | null;
    min: number | null;
    textValue: string;
    type: LinkAttrTypeT;
};
export type DialogDatePeriodStateT = {
    field: DatePeriodFieldT;
    result: DatePeriodRoleT;
};
export type ExternalLinkAttrT = {
    credited_as: string;
    text_value: string;
    type: {
        gid: string;
    };
};
export type DialogLinkTypeStateT = {
    autocomplete: AutocompleteStateT<LinkTypeT>;
    error: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier";
};
export type DialogSourceEntityStateT = $ReadOnly<_$Spread<DialogEntityCreditStateT, {
    entityType: RelatableEntityTypeT;
    error: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier";
}>>;
export type TargetTypeOptionT = {
    text: string;
    value: RelatableEntityTypeT;
};
export type TargetTypeOptionsT = $ReadOnlyArray<TargetTypeOptionT>;
export type DialogTargetEntityStateT = $ReadOnly<_$Spread<DialogEntityCreditStateT, {
    allowedTypes: TargetTypeOptionsT | null;
    autocomplete: AutocompleteStateT<NonUrlRelatableEntityT> | null;
    error: string;
    relationshipId: number;
    target: RelatableEntityT;
    targetType: RelatableEntityTypeT;
}>>;
export type DialogEntityCreditStateT = {
    creditedAs: string;
    creditsToChange: CreditChangeOptionT;
    releaseHasUnloadedTracks: boolean;
};
export type LinkAttributeShapeT = {
    credited_as: string;
    text_value: string;
    type: LinkAttrTypeT | null;
};
export type LinkAttributesByRootIdT = Map<number, Array<LinkAttributeShapeT>>;
export type BatchCreateWorksDialogStateT = {
    attributes: DialogAttributesStateT;
    datePeriod: DialogDatePeriodStateT;
    languages: MultiselectLanguageStateT;
    linkType: DialogLinkTypeStateT;
    workType: number | null;
};
export type EditWorkDialogStateT = {
    languages: MultiselectLanguageStateT;
    name: string;
    workType: number | null;
};
export type MultiselectLanguageValueStateT = {
    autocomplete: AutocompleteStateT<LanguageT>;
    key: number;
    removed: boolean;
};
export type MultiselectLanguageStateT = {
    max: number | null;
    staticItems: $ReadOnlyArray<AutocompleteOptionItemT<LanguageT>>;
    values: $ReadOnlyArray<MultiselectLanguageValueStateT>;
};
export type ReleaseWithMediumsAndReleaseGroupT = $ReadOnly<_$Spread<ReleaseWithMediumsT, {
    releaseGroup: ReleaseGroupT;
}>>;
export type RecordingMediumsT = Map<number, Array<MediumWithRecordingsT>>;
export type MediumWorkStateT = {
    isSelected: boolean;
    targetTypeGroups: RelationshipTargetTypeGroupsT;
    work: WorkT;
};
export type MediumWorkStateTreeT = "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
export type MediumRecordingStateT = {
    isSelected: boolean;
    recording: RecordingT;
    relatedWorks: MediumWorkStateTreeT;
    targetTypeGroups: RelationshipTargetTypeGroupsT;
};
export type MediumRecordingStateTreeT = "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
export type MediumStateTreeT = "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
export type ReleaseRelationshipEditorStateT = $ReadOnly<_$Spread<$Exact<LazyReleaseStateT>, _$Spread<$Exact<RelationshipEditorStateT>, {
    editNoteField: FieldT<string>;
    enterEditForm: FormT<{
        make_votable: FieldT<boolean>;
    }>;
    entity: ReleaseWithMediumsAndReleaseGroupT;
    mediums: MediumStateTreeT;
    mediumsByRecordingId: RecordingMediumsT;
    selectedRecordings: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
    selectedWorks: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
    submissionError: string | null | undefined;
    submissionInProgress: boolean;
}>>>;
export type RelationshipSourceGroupsContextT = {
    existing: RelationshipSourceGroupsT;
    pending: RelationshipSourceGroupsT;
};
