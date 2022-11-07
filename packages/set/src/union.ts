import { addAll } from "./addAll";
import { copy } from "./copy";
import { SetCompatible } from "./_types";

/**
 *
 * @example
 * Union of two sets
 * ```
 * const setA = new Set([1,2]);
 * const setB = new Set([2,3]);
 * const sum = union(setA)(setB);
 * console.log(sum); // Set([1,2,3])
 * ```
 *
 * @returns
 */
export const union = <T>(
  setA: Set<T>
): ((setB: SetCompatible<T>) => Set<T>) => {
  return addAll(copy(setA));
};
