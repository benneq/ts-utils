import { charCodeOf } from "./charCodeOf";
import { CharCodeRange } from "./_types";

/**
 * CharCodeRange from `a` to `z`
 */
export const lowercaseAsciiLetterRange: CharCodeRange = [
  charCodeOf("a"),
  charCodeOf("z"),
];
