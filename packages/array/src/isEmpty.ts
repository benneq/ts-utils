import { EmptyArrayLike } from "./_types";

/**
 * Checks if an {@link ArrayLike} contains any element
 *
 * @example
 * Returns `true` if the {@link ArrayLike} is empty
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
 * @param array - the {@link ArrayLike} to check
 * @returns `true` if the {@link ArrayLike} is empty, otherwise `false`
 */
export const isEmpty = (array: ArrayLike<unknown>): array is EmptyArrayLike => {
  return !array.length;
};
