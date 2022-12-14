import { Mapper } from "@benneq/function";
import { compute } from "./compute";

/**
 * @mutation
 *
 * @remark
 * only returns `undefined` if `mappingFunction` returns `undefined`
 *
 * @example
 * Set a {@link Map} entry if the key is absent
 * ```ts
 * const map = new Map();
 * computeIfAbsent(map)(1, key => key + 1);
 * console.log(map); // Map([[1, 2]])
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const computeIfAbsent =
  <K, V>(map: Map<K, V>) =>
  (key: K, mappingFunction: Mapper<K, V>): V | undefined => {
    if (!map.has(key)) {
      return compute(map)(key, mappingFunction);
    }
    return map.get(key);
  };
