import * as tree from "weight-balanced-tree";
import type { OptionItemT as AutocompleteOptionItemT, StateT as AutocompleteStateT } from "../common/components/Autocomplete2/types.js";
import type { LazyReleaseStateT as LazyReleaseStateT } from "../release/types.js";
import type { RelationshipEditStatusT as RelationshipEditStatusT } from "./constants.js";
export type CreditChangeOptionT = "" | "all" | "same-entity-types" | "same-relationship-type";
export type RelationshipStateForTypesT = {
    _lineage: $ReadOnlyArray;
    _original: RelationshipStateT | null;
    _status: RelationshipEditStatusT;
    attributes: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
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
export type RelationshipStateT = RelationshipStateForTypesT;
export type RelationshipPhraseGroupT = {
    relationships: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
    textPhrase: string;
};
export type RelationshipLinkTypeGroupT = {
    backward: boolean;
    phraseGroups: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
    typeId: number;
};
export type RelationshipLinkTypeGroupKeyT = {
    backward: boolean;
    typeId: number;
};
export type RelationshipLinkTypeGroupsT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
export type RelationshipTargetTypeGroupT = "TODO: Support TypeNode TupleTypeAnnotation";
export type RelationshipTargetTypeGroupsT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
export type RelationshipSourceGroupT = "TODO: Support TypeNode TupleTypeAnnotation";
export type RelationshipSourceGroupsT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
export type NonReleaseRelatableEntityT = AreaT | ArtistT | EventT | GenreT | InstrumentT | LabelT | PlaceT | RecordingT | ReleaseGroupT | SeriesT | UrlT | WorkT;
export type NonReleaseRelatableEntityTypeT = "TODO: Support TypeNode IndexedAccessType";
export type RelationshipDialogLocationT = {
    backward: "TODO: Support TypeNode NullableTypeAnnotation";
    batchSelection: "TODO: Support TypeNode NullableTypeAnnotation";
    linkTypeId: "TODO: Support TypeNode NullableTypeAnnotation";
    relationshipId: "TODO: Support TypeNode NullableTypeAnnotation";
    source: RelatableEntityT;
    targetType: "TODO: Support TypeNode NullableTypeAnnotation";
    textPhrase: "TODO: Support TypeNode NullableTypeAnnotation";
    track: "TODO: Support TypeNode NullableTypeAnnotation";
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
export type DialogBooleanAttributeStateT = $ReadOnly;
export type DialogMultiselectAttributeStateT = $ReadOnly;
export type DialogMultiselectAttributeValueStateT = {
    autocomplete: AutocompleteStateT;
    control: "multiselect-value";
    creditedAs: string;
    error: string;
    key: number;
    removed: boolean;
};
export type DialogTextAttributeStateT = $ReadOnly;
export type DialogAttributeT = DialogBooleanAttributeStateT | DialogMultiselectAttributeStateT | DialogTextAttributeStateT;
export type DialogAttributesT = $ReadOnlyArray;
export type DialogAttributesStateT = {
    attributesList: DialogAttributesT;
    resultingLinkAttributes: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
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
    autocomplete: AutocompleteStateT;
    error: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier";
};
export type DialogSourceEntityStateT = $ReadOnly;
export type TargetTypeOptionT = {
    text: string;
    value: RelatableEntityTypeT;
};
export type TargetTypeOptionsT = $ReadOnlyArray;
export type DialogTargetEntityStateT = $ReadOnly;
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
export type LinkAttributesByRootIdT = Map;
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
    autocomplete: AutocompleteStateT;
    key: number;
    removed: boolean;
};
export type MultiselectLanguageStateT = {
    max: number | null;
    staticItems: $ReadOnlyArray;
    values: $ReadOnlyArray;
};
export type ReleaseWithMediumsAndReleaseGroupT = $ReadOnly;
export type RecordingMediumsT = Map;
export type MediumWorkStateT = {
    isSelected: boolean;
    targetTypeGroups: RelationshipTargetTypeGroupsT;
    work: WorkT;
};
export type MediumWorkStateTreeT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
export type MediumRecordingStateT = {
    isSelected: boolean;
    recording: RecordingT;
    relatedWorks: MediumWorkStateTreeT;
    targetTypeGroups: RelationshipTargetTypeGroupsT;
};
export type MediumRecordingStateTreeT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
export type MediumStateTreeT = "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier" | null;
export type ReleaseRelationshipEditorStateT = $ReadOnly;
export type RelationshipSourceGroupsContextT = {
    existing: RelationshipSourceGroupsT;
    pending: RelationshipSourceGroupsT;
};
