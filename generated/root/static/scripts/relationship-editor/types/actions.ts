// THIS FILE IS CONVERTED FROM Flow to TypeScript by TypedBrainz.
import { WsJsEditResponseT } from "../../../../../declared-types.js"
import { RecordingT } from "../../../../../declared-types.js"
import { RelationshipT } from "../../../../../declared-types.js"
import { WorkT } from "../../../../../declared-types.js"
import { PartialDateT } from "../../../../../declared-types.js"
import { LanguageT } from "../../../../../declared-types.js"
import { NonUrlRelatableEntityT } from "../../../../../declared-types.js"
import { LinkAttrTypeT } from "../../../../../declared-types.js"
import { LinkTypeT } from "../../../../../declared-types.js"
import { RelatableEntityTypeT } from "../../../../../declared-types.js"
import { RelatableEntityT } from "../../../../../declared-types.js"
import type { $ReadOnlyArray, $ReadOnly, $ReadOnlyMap, $Exact, $Keys, $Values, _$Spread } from "../../../../../../src/type-utils.js";
import * as tree from "weight-balanced-tree";
import type { ActionT as AutocompleteActionT } from "../../common/components/Autocomplete2/types.js";
import type { ActionT as DateRangeFieldsetActionT } from "../../edit/components/DateRangeFieldset.js";
import type { MultiselectActionT as MultiselectActionT } from "../../edit/components/Multiselect.js";
import type { WorkTypeSelectActionT as WorkTypeSelectActionT } from "../../release/components/WorkTypeSelect.js";
import type { LazyReleaseActionT as LazyReleaseActionT } from "../../release/types.js";
import type { CreditChangeOptionT as CreditChangeOptionT, ExternalLinkAttrT as ExternalLinkAttrT, MediumRecordingStateTreeT as MediumRecordingStateTreeT, MediumWorkStateT as MediumWorkStateT, RelationshipDialogLocationT as RelationshipDialogLocationT, RelationshipPhraseGroupT as RelationshipPhraseGroupT, RelationshipStateT as RelationshipStateT } from "../types.js";
export type DialogEntityCreditActionT = {
    creditedAs: string;
    type: "set-credit";
} | {
    type: "set-credits-to-change";
    value: CreditChangeOptionT;
};
export type DialogLinkOrderActionT = {
    newLinkOrder: number;
    type: "update-link-order";
};
export type DialogActionT = {
    type: "change-direction";
} | {
    attributes: $ReadOnlyArray<ExternalLinkAttrT>;
    type: "set-attributes";
} | {
    type: "toggle-help";
} | {
    action: DialogEntityCreditActionT;
    type: "update-source-entity";
} | {
    action: DialogTargetEntityActionT;
    source: RelatableEntityT;
    type: "update-target-entity";
} | {
    source: RelatableEntityT;
    targetType: RelatableEntityTypeT;
    type: "update-target-type";
} | DialogLinkOrderActionT | {
    action: DialogLinkTypeActionT;
    source: RelatableEntityT;
    type: "update-link-type";
} | {
    action: DialogAttributeActionT;
    type: "update-attribute";
} | {
    action: DateRangeFieldsetActionT;
    type: "update-date-period";
};
export type DialogAttributeActionT = {
    action: DialogBooleanAttributeActionT;
    rootKey: number;
    type: "update-boolean-attribute";
} | {
    action: DialogMultiselectAttributeActionT;
    rootKey: number;
    type: "update-multiselect-attribute";
} | {
    action: DialogTextAttributeActionT;
    rootKey: number;
    type: "update-text-attribute";
};
export type DialogBooleanAttributeActionT = {
    enabled: boolean;
    type: "toggle";
};
export type DialogLinkTypeActionT = {
    action: AutocompleteActionT<LinkTypeT>;
    source: RelatableEntityT;
    type: "update-autocomplete";
};
export type DialogMultiselectAttributeActionT = MultiselectActionT<LinkAttrTypeT> | {
    creditedAs: string;
    type: "set-value-credit";
    valueKey: number;
};
export type DialogTextAttributeActionT = {
    textValue: string;
    type: "set-text-value";
};
export type UpdateRelationshipActionT = {
    batchSelectionCount: number | "WIP convertTypeNode: VoidTypeAnnotation";
    creditsToChangeForSource: CreditChangeOptionT;
    creditsToChangeForTarget: CreditChangeOptionT;
    newRelationshipState: RelationshipStateT;
    oldRelationshipState: RelationshipStateT | null;
    sourceEntity: RelatableEntityT;
    type: "update-relationship-state";
};
export type RelationshipEditorActionT = {
    relationship: RelationshipStateT;
    type: "remove-relationship";
} | {
    relationship: RelationshipStateT;
    source: RelatableEntityT;
    type: "move-relationship-down";
} | {
    relationship: RelationshipStateT;
    source: RelatableEntityT;
    type: "move-relationship-up";
} | {
    hasOrdering: boolean;
    linkPhraseGroup: RelationshipPhraseGroupT;
    source: RelatableEntityT;
    type: "toggle-ordering";
} | {
    location: RelationshipDialogLocationT | null;
    type: "update-dialog-location";
} | {
    changes: {};
    entityType: RelatableEntityTypeT;
    type: "update-entity";
} | UpdateRelationshipActionT;
export type UpdateTargetEntityAutocompleteActionT = {
    action: AutocompleteActionT<NonUrlRelatableEntityT>;
    linkType: LinkTypeT | null | undefined;
    source: RelatableEntityT;
    type: "update-autocomplete";
};
export type DialogTargetEntityActionT = UpdateTargetEntityAutocompleteActionT | {
    action: DialogEntityCreditActionT;
    type: "update-credit";
} | {
    text: string;
    type: "update-url-text";
};
export type BatchCreateWorksDialogActionT = {
    action: DialogAttributeActionT;
    type: "update-attribute";
} | {
    action: DateRangeFieldsetActionT;
    type: "update-date-period";
} | {
    action: MultiselectActionT<LanguageT>;
    type: "update-languages";
} | {
    action: DialogLinkTypeActionT;
    source: RelatableEntityT;
    type: "update-link-type";
} | WorkTypeSelectActionT;
export type AcceptBatchCreateWorksDialogActionT = {
    attributes: "WIP convertGenericTypeAnnotation: QualifiedTypeIdentifier" | null;
    begin_date: PartialDateT | null;
    end_date: PartialDateT | null;
    ended: boolean;
    languages: $ReadOnlyArray<LanguageT>;
    linkType: LinkTypeT;
    type: "accept-batch-create-works-dialog";
    workType: number | null;
};
export type ReleaseRelationshipEditorActionT = LazyReleaseActionT | RelationshipEditorActionT | AcceptBatchCreateWorksDialogActionT | {
    languages: $ReadOnlyArray<LanguageT>;
    name: string;
    type: "accept-edit-work-dialog";
    work: WorkT;
    workType: number | null;
} | {
    relationships: $ReadOnlyArray<RelationshipT>;
    type: "load-work-relationships";
    work: WorkT;
} | {
    recording: RecordingT;
    type: "remove-work";
    workState: MediumWorkStateT;
} | {
    isSelected: boolean;
    type: "toggle-select-all-recordings";
} | {
    isSelected: boolean;
    type: "toggle-select-all-works";
} | {
    isSelected: boolean;
    recording: RecordingT;
    type: "toggle-select-recording";
} | {
    isSelected: boolean;
    type: "toggle-select-work";
    work: WorkT;
} | {
    isSelected: boolean;
    recordingStates: MediumRecordingStateTreeT | null;
    type: "toggle-select-medium-recordings";
} | {
    isSelected: boolean;
    recordingStates: MediumRecordingStateTreeT | null;
    type: "toggle-select-medium-works";
} | {
    editNote: string;
    type: "update-edit-note";
} | {
    checked: boolean;
    type: "update-make-votable";
} | {
    type: "start-submission";
} | {
    error: string;
    type: "stop-submission";
} | {
    edits: Array<"WIP convertTypeNode: TupleTypeAnnotation"> | Array<"WIP convertTypeNode: TupleTypeAnnotation">;
    responseData: WsJsEditResponseT;
    type: "update-submitted-relationships";
};
