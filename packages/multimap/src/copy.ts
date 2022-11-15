import { copy as arrayCopy } from "@benneq/array";
import { mapValues } from "@benneq/map";
import { MultiMap } from "./_types";

/**
 * Copies all entries of a {@link MultiMap} into a new {@link MultiMap}.
 *
 * @example
 * ```ts
 * const multiMap = new Map([["k": ["v"]]]);
 * const copiedMultiMap = copy(multiMap);
 * console.log(copiedMultiMap); // Map([["k": ["v"]]])
 * ```
 *
 * @returns the copied {@link MultiMap}
 */
export const copy: {
  <K, V>(multiMap: MultiMap<K, V>): MultiMap<K, V>;
} = mapValues(arrayCopy);
