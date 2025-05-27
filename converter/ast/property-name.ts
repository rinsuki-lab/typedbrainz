// SPDX-License-Identifier: MIT
import { wipLiteral } from "../wip.js";
import { convertIdentifier } from "./identifier.js";
import { convertLiteral } from "./literal.js";

export function convertPropertyName(source: any) {
    switch (source.type) {
    case "Identifier":
        return convertIdentifier(source)
    case "Literal":
        return convertLiteral(source)
    default:
        return wipLiteral("convertPropertyName", source.type);
    }
}
