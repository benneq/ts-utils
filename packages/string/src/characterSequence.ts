import { empty } from "@benneq/iterable";
import { pipe } from "@benneq/function";
import { map, takeWhile } from "@benneq/iterable";
import { numberSequence } from "@benneq/number";
import { CharCodeRange } from "./_types";
import { charCodeOf } from "./charCodeOf";

/**
 * A Generator function that will iterate over a range of characters
 *
 * Only the first character of the provided string will be used.
 *
 * @example
 * characterSequence(uppercaseAsciiLetterRange) => ['A','B',...,'Z']
 * characterSequence(uppercaseAsciiLetterRange, 'D', -1) => ['D','C','B','A']
 * characterSequence([67, 69], '', 1) => ['C','D','E']
 *
 * @returns a Generator that steps through the characters
 */
export const characterSequence = (
  [rangeStart, rangeEnd]: CharCodeRange,
  initialCharacter = "",
  stepSize = 1
): Iterable<string> => {
  if (!stepSize) {
    return empty;
  }

  const charCode = initialCharacter.length
    ? charCodeOf(initialCharacter)
    : stepSize < 0
    ? rangeEnd
    : rangeStart;

  return pipe(
    takeWhile<number>((value) => value >= rangeStart && value <= rangeEnd),
    map(String.fromCharCode)
  )(numberSequence(charCode, stepSize));
};
