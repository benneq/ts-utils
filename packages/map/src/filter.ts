import { Predicate } from "@benneq/predicate";
import { filter as iterableFilter } from "@benneq/iterable";

/**
 * Filters a {@link Map} by its entries
 *
 * Only contains entries that match the `predicate`
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param predicate
 * @returns the new {@link Map} with the filtered entries
 */
export const filter =
  <K, V>(predicate: Predicate<[[K, V]]>) =>
  (map: Map<K, V>): Map<K, V> => {
    return new Map(iterableFilter<[K, V]>(predicate)(map));
  };
