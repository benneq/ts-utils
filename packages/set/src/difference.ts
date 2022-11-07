import { copy } from "./copy";
import { deleteAll } from "./deleteAll";
import { SetCompatible } from "./_types";

/**
 *
 * @example
 * Difference between two sets
 * ```
 * const setA = new Set([2,3]);
 * const setB = new Set([1,2]);
 * const diff = difference(setA)(setB);
 * console.log(diff); // Set([1])
 * ```
 *
 * @returns
 */
export const difference = <T>(
  setA: Set<T>
): ((setB: SetCompatible<T>) => Set<T>) => {
  return deleteAll(copy(setA));
};
