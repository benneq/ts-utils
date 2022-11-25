import { SortDirectionCycler } from "./_types";

/**
 * Cycles though {@link SortDirection}s from `undefined` to `'asc'` to `'desc'`.
 *
 * @example
 * ```ts
 * const result = defaultSortDirectionCycler('desc');
 * console.log(result); // undefined
 * ```
 *
 * @param direction - the {@link SortDirection} to cycle
 * @returns the new {@link SortDirection}
 */
export const defaultSortDirectionCycler: SortDirectionCycler = (direction) => {
  if (!direction) {
    return "asc";
  } else if (direction === "asc") {
    return "desc";
  } else {
    return undefined;
  }
};
