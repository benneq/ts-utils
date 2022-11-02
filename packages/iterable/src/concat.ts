import { identity } from "@benneq/function";
import { flatMap } from "./flatMap";

/**
 * Concatenates multiple Iterables in order
 *
 * @example
 * concat([]) => []
 * concat([[1,2]]) => [1,2]
 * concat([[1,2],[3,4]]) => [1,2,3,4]
 *
 * @returns the concatenation of the Iterables
 */
export const concat: <T>(
  iterable: Iterable<Iterable<T>>
) => Generator<T, void, unknown> = flatMap(identity);
