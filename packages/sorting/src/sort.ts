import { SortDirection } from "./_types";

/**
 * Creates a {@link Sort} object.
 *
 * @example
 * ```ts
 * const sort = new Sort([['a', 'asc']]);
 * console.log([...sort]); // [['a', 'asc']]
 * ```
 *
 * @typeParams P - the allowd properties
 */
export class Sort<P extends string> extends Map<P, SortDirection> {}
