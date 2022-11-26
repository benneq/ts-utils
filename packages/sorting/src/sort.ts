import { SortDirection } from "./_types";

/**
 * Creates a {@link Sort} object.
 *
 * @example
 * ```ts
 * const mySort = sort([['a', 'asc']]);
 * console.log([...mySort]); // [['a', 'asc']]
 * ```
 *
 * @param args - the optional initial values
 * @returns the new {@link Sort} object
 */

export class Sort<P extends string> extends Map<P, SortDirection> {}
