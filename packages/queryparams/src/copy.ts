import { copy as arrayCopy } from "@benneq/array";
import { mapValues } from "@benneq/map";
import { QueryParams } from "./_types";

/**
 * Copies all entries of a {@link QueryParams} object into a new {@link QueryParams} object.
 *
 * @example
 * ```ts
 * const queryParams = new Map([["k": ["v"]]]);
 * const copiedQueryParams = copy(queryParams);
 * console.log(copiedQueryParams); // Map([["k": ["v"]]])
 * ```
 *
 * @returns the copied {@link QueryParams} object
 */
export const copy: {
  (queryParams: QueryParams): QueryParams;
} = mapValues<string[], string[]>(arrayCopy);
