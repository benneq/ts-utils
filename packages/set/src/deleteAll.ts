import { reduce } from "@benneq/iterable";
import { SetCompatible } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * deleteAll([1,2])([]) => [1,2]
 * deleteAll([1,2])([2,3]) => [1]
 *
 * @param set
 * @returns `true` if the Set was modified, otherwise `false`
 */
export const deleteAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): Set<T> => {
    value.forEach(set.delete, set);
    return set;
  };
