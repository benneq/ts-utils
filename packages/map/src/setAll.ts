import { Entry } from "@benneq/object";

/**
 *
 * @mutation
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entries
 * @returns
 */
export const setAll =
  <K, V>(map: Map<K, V>) =>
  (entries: Entry<K, V>[]): Map<K, V> => {
    entries.forEach((entry) => map.set(...entry));
    return map;
  };
