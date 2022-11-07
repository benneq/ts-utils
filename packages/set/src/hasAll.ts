import { every } from "@benneq/iterable";
import { SetCompatible } from "./_types";

/**
 *
 * @example
 * hasAll([1,2])([2]) => true
 * hasAll([1,2])([2,3]) => false
 *
 * @param set
 * @returns
 */
export const hasAll = <T>(
  set: Set<T>
): ((value: SetCompatible<T>) => boolean) => {
  return every((element) => set.has(element));
};
