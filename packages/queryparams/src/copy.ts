import { copy as arrayCopy } from "@benneq/array";
import { mapValues } from "@benneq/map";
import { QueryParams } from "./_types";

/**
 *
 * @example
 * ```ts
 * const queryParams = new Map([["k": ["v"]]]);
 * const copiedQueryParams = copy(queryParams);
 * console.log(copiedQueryParams); // Map([["k": ["v"]]])
 * ```
 *
 */
export const copy: {
  (queryParams: QueryParams): QueryParams;
} = mapValues<string[], string[]>((values) => arrayCopy(values));
