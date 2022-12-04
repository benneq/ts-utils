import { pipe } from "@benneq/function";
import { map, takeWhile } from "@benneq/iterable";
import { numberSequence } from "@benneq/number";
import { CharCodeRange } from "./_types";
import { charCodeOf } from "./charCodeOf";

/**
 * Iterates over a range of characters.
 *
 * Only the first character of the `initialCharacter` will be used.
 *
 * If `initialCharacter` is empty, the sequence will start with `rangeStart` if
 * `stepSize` is positive, or `rangeEnd` if `stepSize` is negative.
 *
 * If `stepSize` is `0` the sequence is empty.
 *
 * @example
 * Iterate over `uppercaseAsciiLetterRange`
 * ```ts
 * for (const c of characterSequence(uppercaseAsciiLetterRange)) {
 *   console.log(c); // 'A','B',...,'Z'
 * }
 * ```
 *
 * @example
 * Start at letter 'D' and iterate backwards
 * ```ts
 * for (const c of characterSequence(uppercaseAsciiLetterRange, 'D', -1)) {
 *   console.log(c); // 'D','C','B','A'
 * }
 * ```
 *
 * @example
 * Create a character Array
 * ```ts
 * const a = [...characterSequence(uppercaseAsciiLetterRange, 'V', 2)];
 * console.log(a); // ['V', 'X', 'Z']
 * ```
 *
 * @returns an Iterable that iterates through the characters
 */
export const characterSequence = (
  [rangeStart, rangeEnd]: CharCodeRange,
  initialCharacter = "",
  stepSize = 1,
  // internal variables:
  charCode = initialCharacter
    ? charCodeOf(initialCharacter)
    : stepSize < 0
    ? rangeEnd
    : rangeStart
): Iterable<string> => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(stepSize >= 1);
  }

  return pipe(
    takeWhile<number>((value) => value >= rangeStart && value <= rangeEnd),
    map(String.fromCharCode)
  )(numberSequence(charCode, stepSize));
};
