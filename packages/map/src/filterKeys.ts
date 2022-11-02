import { Predicate } from "@benneq/predicate";
import { filter } from "./filter";

/**
 * Filters a Map by its keys
 *
 * Only contains entries where the key matches the `predicate`
 *
 * @param predicate
 * @returns a new Map with the filtered entries
 */
export const filterKeys = <K, V>(
  predicate: Predicate<[K]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter<K, V>(([k]) => predicate(k));
};
