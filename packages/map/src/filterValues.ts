import { Predicate } from "@benneq/predicate";
import { filter } from "./filter";

/**
 * Filters a {@link Map} by its values
 *
 * Only contains entries where the value matches the `predicate`
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param predicate
 * @returns a new {@link Map} with the filtered entries
 */
export const filterValues = <K, V>(
  predicate: Predicate<[V]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter<K, V>(([_key, value]) => predicate(value));
};
