import { filter } from "./filter";

/**
 *
 * @example
 * Intersection between two sets
 * ```
 * const setA = new Set([1,2]);
 * const setB = new Set([2,3]);
 * const diff = intersection(setA, setB);
 * console.log(diff); // Set([2])
 * ```
 *
 * @returns
 */
export const intersection = <T>(setA: Set<T>): ((setB: Set<T>) => Set<T>) => {
  return filter((element) => setA.has(element));
};
