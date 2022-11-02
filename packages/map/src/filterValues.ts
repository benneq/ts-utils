import { Predicate } from "@benneq/predicate";
import { filter } from "./filter";

/**
 * Filters a Map by its values
 *
 * Only contains entries where the value matches the `predicate`
 *
 * @param predicate
 * @returns a new Map with the filtered entries
 */
export const filterValues = <K, V>(
  predicate: Predicate<[V]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter<K, V>(([_, v]) => predicate(v));
};
