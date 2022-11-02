import { Comparator } from "./_types";

/**
 * Orders `boolean` values by their natural order, i.e. `false` < `true`
 *
 * @exmaple
 * booleanComparator(true, true) => 0
 * booleanComparator(false, true) => < 0
 * booleanComparator(true, false) => > 0
 *
 * @param valueA
 * @param valueB
 * @returns a Comparator for boolean values
 */
export const booleanComparator: Comparator<boolean> = (valueA, valueB) => {
  return valueA === valueB ? 0 : valueA ? 1 : -1;
};
