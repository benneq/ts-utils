import { alwaysTrue } from "@benneq/predicate";
import { findFirst } from "./findFirst";

/**
 * Get the first element of an {@link Iterable}, or an optional default value if the
 * {@link Iterable} is empty.
 *
 * Returns `undefined` if the {@link Iterable} is empty and no `defaultValue`
 * was provided.
 *
 * @example
 * Get the first element
 * ```ts
 * const result = first()([1,2,3]);
 * console.log(result); // 1
 * ```
 *
 * @example
 * Get the first element or the `defaultValue`
 * ```ts
 * const result = first(1)([]);
 * console.log(result); // 1
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param defaultValue - the default value
 * @returns the first element of the {@link Iterable}, or the defaultValue
 */
export const first: {
  <T>(): (iterable: Iterable<T>) => T | undefined;
  <T>(defaultValue: T): (iterable: Iterable<T>) => T;
} = <T>(defaultValue?: T): ((iterable: Iterable<T>) => T | undefined) => {
  return findFirst(alwaysTrue, defaultValue);
};
