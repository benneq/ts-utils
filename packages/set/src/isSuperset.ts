import { hasAll } from "./hasAll";

/**
 *
 * @example
 * isSuperset([], []) => true
 * isSuperset([1], [1,2]) => false
 * isSuperset([1,2], [1]) => true
 *
 * @param set
 * @param subset
 * @returns
 */
export const isSuperset = <T>(set: Set<T>, subset: Set<T>): boolean => {
  return hasAll(set)(subset);
};
