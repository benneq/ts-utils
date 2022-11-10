import { isUndefined } from "@benneq/object";

/**
 * @mutation
 *
 * @remark
 * only returns `undefined` if `mappingFunction` returns `undefined`
 *
 * @example
 * Compute the new value based on the old {@link Map} entry
 * ```ts
 * const map = new Map();
 * compute(map)(1, (key, value) => value ?? 2);
 * console.log(map); // Map([[1, 2]])
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const compute =
  <K, V>(map: Map<K, V>) =>
  <T extends V | undefined>(
    key: K,
    remappingFunction: (key: K, value: T) => V | undefined
  ): V | undefined => {
    const newValue = remappingFunction(key, map.get(key) as T);

    if (isUndefined(newValue)) {
      map.delete(key);
    } else {
      map.set(key, newValue);
    }

    return newValue;
  };
