import { identity } from "@benneq/function";
import { flatMap } from "./flatMap";

/**
 * Concatenates multiple {@link Iterable}s in order.
 *
 * @example
 * ```ts
 * const iterables = [[1,2], [3,4]];
 * const concatenated = concat(iterables);
 * console.log(concatenated); // [1,2,3,4]
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @returns the concatenation of the {@link Iterable}s
 */
export const concat: <T>(iterable: Iterable<Iterable<T>>) => Iterable<T> =
  flatMap(identity);
