import { Predicate } from "@benneq/predicate";

/**
 * 
 * @mutation
 * 
 * @example
 * ```ts
 * const array = [1,2,3];
 * removeIf(array, n => n % 2 === 0);
 * console.log(array); // [1,3]
 * ```
 * 
 * @param array 
 * @param predicate 
 */
export const deleteIf = <T>(array: T[], predicate: Predicate<[T]>) => {
  array.forEach(
    (element, index) => predicate(element) && array.splice(index, 1)
  );
};
