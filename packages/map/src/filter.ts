import { Predicate } from "@benneq/predicate";
import { filter as iterableFilter } from "@benneq/iterable";

/**
 * Filters a Map by its entries
 *
 * Only contains entries that match the `predicate`
 *
 * @param predicate
 * @returns a new Map with the filtered entries
 */
export const filter =
  <K, V>(predicate: Predicate<[[K, V]]>) =>
  (map: Map<K, V>): Map<K, V> => {
    return new Map(iterableFilter<[K, V]>(predicate)(map));
  };
