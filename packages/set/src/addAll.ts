import { SetCompatible } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * addAll([1,2])([]) => [1,2]
 * addAll([1,2])([2,3]) => [1,2,3]
 *
 * @param set
 * @returns
 */
export const addAll =
  <T>(set: Set<T>) =>
  (values: SetCompatible<T>): Set<T> => {
    values.forEach((value) => set.add(value));
    return set;
  };
