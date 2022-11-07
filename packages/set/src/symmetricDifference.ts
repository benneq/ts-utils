import { copy } from "./copy";
import { toggleAll } from "./toggleAll";
import { SetCompatible } from "./_types";

/**
 *
 * @example
 * Symmetric difference between two sets
 * ```
 * const setA = new Set([1,2]);
 * const setB = new Set([2,3]);
 * const diff = symmetricDifference(setA, setB);
 * console.log(diff); // Set([1,3])
 * ```
 *
 * @returns
 */
export const symmetricDifference = <T>(
  setA: Set<T>
): ((setB: SetCompatible<T>) => Set<T>) => {
  return toggleAll(copy(setA));
};
