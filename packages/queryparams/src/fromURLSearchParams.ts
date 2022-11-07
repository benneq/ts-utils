import { QueryParams } from "./_types";
import { reduce } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { multiMapAdd } from "@benneq/map";

/**
 * Converts URLSearchParams to {@link QueryParams}
 *
 * @example
 * Convert URLSearchParams
 * ```ts
 * const urlSearchParams = new URLSearchParams([
 *   ["k1", "v1"],
 *   ["k1", "v2"],
 * ])
 *
 * const queryParams = fromURLSearchParams(urlSearchParams);
 * console.log(queryParams); // Map([["k1", ["v1", "v2"]]])
 * ```
 *
 * @returns the parsed {@link QueryParams}
 */
export const fromURLSearchParams = (
  urlSearchParams: URLSearchParams
): QueryParams => {
  return reduce<Entry<string, string>, QueryParams>((acc, [key, value]) => {
    multiMapAdd(acc)(key, value);
    return acc;
  }, new Map())(urlSearchParams.entries());
};
