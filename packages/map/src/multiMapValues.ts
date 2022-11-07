import { flatMap } from "@benneq/iterable";
import { MultiMap } from "./_types";

/**
 * Returns an iterable of values in the {@link MultiMap}.
 *
 * @example
 * Iterate over all values
 * ```ts
 * const multiMap = new Map([["k", ["v1", "v2"]]]);
 * for (const value of multiMapValues(multiMap)) {
 *   console.log(value); // "v1" , "v2"
 * }
 * ```
 *
 */
export const multiMapValues: {
  <K, V>(multiMap: MultiMap<K, V>): Iterable<V>;
} = flatMap(([_key, values]) => values);
