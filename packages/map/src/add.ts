import { Entry } from "@benneq/object";

/**
 *
 * @mutation
 *
 * @returns
 */
export const add =
  <K, V>(map: Map<K, V>) =>
  (entry: Entry<K, V>): void => {
    map.set(entry[0], entry[1]);
  };
