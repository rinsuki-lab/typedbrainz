import { readFileSync } from "node:fs";
import { ConverterContext } from "../context.js";
import {globSync} from "glob"

export function doFindTargets(ctx: ConverterContext) {
    for (const file of globSync("upstream/root/**/*.js")) {
        const content = readFileSync(file, "utf-8");
        if (content.includes("declare type ")) {
            ctx.targets.push(file);
        }
    }
}