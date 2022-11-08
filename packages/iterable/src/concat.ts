import { identity } from "@benneq/function";
import { flatMap } from "./flatMap";

/**
 * Concatenates multiple {@link Iterable}s in order
 *
 * @example
 * concat([]) => []
 * concat([[1,2]]) => [1,2]
 * concat([[1,2],[3,4]]) => [1,2,3,4]
 *
 * @returns the concatenation of the {@link Iterable}s
 */
export const concat: <T>(iterable: Iterable<Iterable<T>>) => Iterable<T> =
  flatMap(identity);
