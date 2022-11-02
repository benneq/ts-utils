import { EmptyArrayLike } from "./_types";

/**
 * Checks if an Array contains any element
 *
 * @example
 * isEmpty([]) => true
 * isEmpty([1,2,3]) => false
 *
 * @returns `true` if the Array is empty, otherwise `false`
 */
export const isEmpty = (array: ArrayLike<unknown>): array is EmptyArrayLike => {
  return !array.length;
};
