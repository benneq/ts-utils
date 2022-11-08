import { Predicate } from "@benneq/predicate";
import { filter } from "./filter";

/**
 * Filters a {@link Map} by its keys
 *
 * Only contains entries where the key matches the `predicate`
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param predicate
 * @returns a new {@link Map} with the filtered entries
 */
export const filterKeys = <K, V>(
  predicate: Predicate<[K]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter<K, V>(([k]) => predicate(k));
};
