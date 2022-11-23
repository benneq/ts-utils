import { DropFirst } from "@benneq/object";
import { Comparator } from "./_types";

type StringLocaleCompareArgs = DropFirst<Parameters<String["localeCompare"]>>;

/**
 * Creates a {@link Comparator} that orders `string` values by their natural
 * order, i.e. `'a' < 'b' < 'ba'`.
 *
 * @example
 * Sort an Array of string values
 * ```ts
 * const array = ["ba", "aa", "ab"];
 * array.sort(stringComparator());
 * console.log(array); // ["aa", "ab", "ba"]
 * ```
 *
 * @param localeCompareArgs - the arguments passed to {@link String.prototype.localeCompare}
 * @returns a {@link Comparator} for string values
 */
export const stringComparator = (
  ...localeCompareArgs: StringLocaleCompareArgs
): Comparator<string> => {
  return (stringA, stringB) =>
    stringA.localeCompare(stringB, ...localeCompareArgs);
};
