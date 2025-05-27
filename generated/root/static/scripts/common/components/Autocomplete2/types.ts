export type SearchableTypeT = "TODO: Support TypeNode IndexedAccessType";
export type StateT = {
    canChangeType: "TODO: Support TypeNode FunctionTypeAnnotation";
    containerClass: string;
    disabled: boolean;
    entityType: "TODO: Support TypeNode IndexedAccessType";
    error: number;
    highlightedIndex: number;
    htmlName: string;
    id: string;
    indexedSearch: boolean;
    inputChangeHook: "TODO: Support TypeNode FunctionTypeAnnotation";
    inputClass: string;
    inputRef: {
        current: HTMLInputElement | null;
    };
    inputValue: string;
    isAddEntityDialogOpen: boolean;
    isInputFocused: boolean;
    isLookupPerformed: boolean;
    isOpen: boolean;
    items: $ReadOnlyArray;
    label: string;
    page: number;
    pendingSearch: string | null;
    placeholder: string;
    recentItems: $ReadOnlyArray | null;
    recentItemsKey: string;
    required: boolean;
    results: $ReadOnlyArray | null;
    selectedItem: OptionItemT | null;
    showDescriptions: boolean;
    showLabel: boolean;
    staticItems: $ReadOnlyArray;
    statusMessage: string;
    totalPages: "TODO: Support TypeNode NullableTypeAnnotation";
    width: string;
};
export type PropsT = {
    children: "Unknown Generic Type Annotaton Type: QualifiedTypeIdentifier";
    dispatch: "TODO: Support TypeNode FunctionTypeAnnotation";
    state: StateT;
};
export type SearchActionT = {
    indexed: boolean;
    searchTerm: string;
    type: "search-after-timeout";
};
export type ActionT = SearchActionT | {
    type: "change-entity-type";
    entityType: SearchableTypeT;
} | {
    type: "clear-recent-items";
} | {
    type: "highlight-index";
    index: number;
} | {
    type: "highlight-next-item";
} | {
    type: "highlight-previous-item";
} | {
    type: "reset-menu";
} | {
    type: "select-item";
    item: ItemT;
} | {
    type: "set-input-focus";
    isFocused: boolean;
} | {
    type: "set-menu-visibility";
    value: boolean;
} | {
    type: "show-ws-results";
    entities: $ReadOnlyArray;
    page: number;
    totalPages: number;
} | {
    type: "show-lookup-error";
} | {
    type: "show-lookup-type-error";
} | {
    type: "show-more-results";
} | {
    type: "set-recent-items";
    items: $ReadOnlyArray;
} | {
    type: "show-search-error";
} | {
    type: "stop-search";
} | {
    type: "toggle-add-entity-dialog";
    isOpen: boolean;
} | {
    type: "toggle-indexed-search";
} | {
    type: "toggle-descriptions";
    showDescriptions: boolean;
} | {
    type: "type-value";
    value: string;
};
export type ActionItemT = {
    type: "action";
    action: ActionT;
    id: number | string;
    name: string | "TODO: Support TypeNode FunctionTypeAnnotation";
    level: number;
    separator: boolean;
    disabled: boolean;
};
export type OptionItemT = {
    type: "option";
    id: number | string;
    name: string | "TODO: Support TypeNode FunctionTypeAnnotation";
    entity: T;
    level: number;
    separator: boolean;
    disabled: boolean;
};
export type HeaderItemT = {
    type: "header";
    id: number | string;
    name: string | "TODO: Support TypeNode FunctionTypeAnnotation";
    disabled: "TODO: Support TypeNode BooleanLiteralTypeAnnotation";
    separator: boolean;
};
export type ItemT = ActionItemT | OptionItemT | HeaderItemT;
export type EntityItemT = EditorT | LanguageT | LinkAttrTypeT | LinkTypeT | NonUrlRelatableEntityT;
