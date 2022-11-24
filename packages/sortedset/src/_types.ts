import { Comparator } from "@benneq/comparator";

/**
 * A representation for sorted sets, using a {@link Comparator} for determining
 * the order of the values and for the equality check.
 */
export type SortedSet<T> = {
  comparator: Comparator<T>;
  values: T[];
};
