// SPDX-License-Identifier: GPLv2-or-later
// Inherited from MB, because this file contains patches for MB.

const patches = [
    ["React.Node", "React.ReactNode"], // Flow vs @types/react
    ["export { ENTITIES as ENTITIES };", "// export { ENTITIES as ENTITIES }; // TODO: remove comment out"], // without this, dts-bundle-generator hates us. TODO: fix this properly
    ["export type ActionItemT<T> = {", "export type ActionItemT<T extends EntityItemT> = {"], // ActionT<T> requires T to be EntityItemT
] satisfies [string, string][];

export function applyPatches(content: string): string {
    for (const [search, replace] of patches) {
        content = content.replaceAll(search, replace);
    }
    return content;
}