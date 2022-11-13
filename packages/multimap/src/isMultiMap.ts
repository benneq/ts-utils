import { isArray } from "@benneq/array";
import { every } from "@benneq/iterable";
import { isMap } from "@benneq/map";
import { Entry } from "@benneq/object";
import { MultiMap } from "./_types";

/**
 * Checks if a `value` is a {@link MultiMap}.
 *
 * @example
 * Returns `true` if the value is a {@link MultiMap}
 * ```ts
 * const value = new Map([["a", ["b"]]]);
 * const result = isMultiMap(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam K - the {@link MultiMap} key type
 * @typeParam V - the {@link MultiMap} value type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link MultiMap}, otherwise `false`
 */
export const isMultiMap = <K, V>(value: unknown): value is MultiMap<K, V> => {
  return (
    isMap(value) && every<Entry>(([_key, values]) => isArray(values))(value)
  );
};
