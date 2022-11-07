import { some } from "@benneq/iterable";
import { SetCompatible } from "./_types";

/**
 *
 * @example
 * hasAny([1,2])([2]) => true
 * hasAny([1,2])([2,3]) => true
 *
 * @param set
 * @returns
 */
export const hasAny = <T>(
  set: Set<T>
): ((value: SetCompatible<T>) => boolean) => {
  return some((element) => set.has(element));
};
