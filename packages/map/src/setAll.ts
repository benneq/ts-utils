import { Entry } from "@benneq/object";

/**
 *
 * @mutation
 *
 * @returns
 */
export const setAll =
  <K, V>(map: Map<K, V>) =>
  (value: Entry<K, V>[]): Map<K, V> => {
    value.forEach((entry) => map.set(...entry));
    return map;
  };
