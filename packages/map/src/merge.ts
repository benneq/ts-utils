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
 * const map = new Map([[1, 2]]);
 * merge(map)(1, 3, (old, value) => old + value);
 * console.log(map); // Map([[1, 5]])
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const merge =
  <K, V>(map: Map<K, V>) =>
  (
    key: K,
    value: V,
    remappingFunction: (oldValue: V | undefined, value: V) => V | undefined
  ): V | undefined => {
    return compute(map)(key, (key, oldValue) =>
      map.has(key) ? remappingFunction(oldValue, value) : value
    );
  };
