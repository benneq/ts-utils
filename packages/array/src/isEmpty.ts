import { EmptyArrayLike } from "./_types";

/**
 * Checks if an Array contains any element
 *
 * @example
 * Returns `true` if the Array is empty
 * ```ts
 * const b = isEmpty([]);
 * console.log(b); // true
 * ```
 *
 * @example
 * Works with Strings, too
 * ```ts
 * const b = isEmpty(" ");
 * console.log(b); // false
 * ```
 *
 * @returns `true` if the Array is empty, otherwise `false`
 */
export const isEmpty = (array: ArrayLike<unknown>): array is EmptyArrayLike => {
  return !array.length;
};
