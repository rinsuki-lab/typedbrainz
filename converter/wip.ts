import { factory } from "typescript";

export function wipLiteral(location: string, type: string) {
    return factory.createStringLiteral(`WIP ${location}: ${type}`);
}