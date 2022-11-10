import { compute } from "./compute";

/**
 * @mutation
 *
 * @example
 * Set a {@link Map} entry if the key is present
 * ```ts
 * const map = new Map([[1, 2]]);
 * computeIfPresent(map)(1, (key, value) => value + 1);
 * console.log(map); // Map([[1, 3]])
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const computeIfPresent =
  <K, V>(map: Map<K, V>) =>
  (
    key: K,
    remappingFunction: (key: K, value: V) => V | undefined
  ): V | undefined => {
    if (map.has(key)) {
      return compute(map)(key, remappingFunction);
    }
    return undefined;
  };
