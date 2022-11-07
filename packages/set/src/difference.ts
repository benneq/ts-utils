import { copy } from "./copy";
import { deleteAll } from "./deleteAll";
import { SetCompatible } from "./_types";

/**
 *
 * @exmple
 * difference([])([]) => []
 * difference([3])([1,2]) => [1,2]
 * difference([2,3])([1,2]) => [1]
 *
 * @param setA
 * @param setB
 * @returns
 */
export const difference = <T>(
  setA: Set<T>
): ((setB: SetCompatible<T>) => Set<T>) => {
  return deleteAll(copy(setA));
};
