import { flatMap } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { MultiMap } from "./_types";

/**
 * Returns an iterable of key, value pairs for every entry in the {@link MultiMap}.
 *
 * @example
 * Iterate over all entries
 * ```ts
 * const multiMap = new Map([["k", ["v1", "v2"]]]);
 * for (const entry of multiMapEntries(multiMap)) {
 *   console.log(entry); // ["k","v1"] , ["k", "v2"]
 * }
 * ```
 *
 */
export const multiMapEntries: {
  <K, V>(multiMap: MultiMap<K, V>): Iterable<Entry<K, V>>;
} = flatMap(([key, values]) => values.map((value) => [key, value]));
