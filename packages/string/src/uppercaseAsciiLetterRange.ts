import { charCodeOf } from "./charCodeOf";
import { CharCodeRange } from "./_types";

/**
 * CharCodeRange from `A` to `Z`
 */
export const uppercaseAsciiLetterRange: CharCodeRange = [
  charCodeOf("A"),
  charCodeOf("Z"),
];
