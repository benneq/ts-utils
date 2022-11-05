import { charCodeOf } from "./charCodeOf";
import { CharCodeRange } from "./_types";

/**
 * CharCodeRange from `A` to `Z`
 *
 * @example
 * Get first uppercase ASCII letter
 * ```ts
 * const s = String.fromCharCode(uppercaseAsciiLetterRange[0]);
 * console.log(s); // 'A'
 * ```
 *
 * @example
 * Iterate over all uppercase ASCII characters
 * ```ts
 * for (const c of characterSequence(uppercaseAsciiLetterRange)) {
 *   console.log(c); // 'A','B',...,'Z'
 * }
 * ```
 *
 */
export const uppercaseAsciiLetterRange: CharCodeRange = [
  charCodeOf("A"),
  charCodeOf("Z"),
];
