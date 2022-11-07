import { toggle } from "./toggle";
import { SetCompatible } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * Toggle multiple values
 * ```ts
 * const set = new Set([1,2]);
 * toggleAll(set)([2,3]);
 * console.log(set); // Set([1,3]);
 * ```
 *
 * @returns
 */
export const toggleAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): Set<T> => {
    value.forEach(toggle(set));
    return set;
  };
