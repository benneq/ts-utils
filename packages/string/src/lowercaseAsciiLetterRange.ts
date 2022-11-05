import { charCodeOf } from "./charCodeOf";
import { CharCodeRange } from "./_types";

/**
 * CharCodeRange from `a` to `z`
 *
 * @example
 * Get first lowercase ASCII letter
 * ```ts
 * const s = String.fromCharCode(lowercaseAsciiLetterRange[0]);
 * console.log(s); // 'a'
 * ```
 *
 * @example
 * Iterate over all lowercase ASCII characters
 * ```ts
 * for (const c of characterSequence(lowercaseAsciiLetterRange)) {
 *   console.log(c); // 'a','b',...,'z'
 * }
 * ```
 *
 */
export const lowercaseAsciiLetterRange: CharCodeRange = [
  charCodeOf("a"),
  charCodeOf("z"),
];
