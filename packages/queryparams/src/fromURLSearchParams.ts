import { QueryParams } from "./_types";
import { reduce } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { multiMapAdd } from "@benneq/map";

/**
 * Converts {@link URLSearchParams} to {@link QueryParams}
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
 * @returns the converted {@link QueryParams} object
 */
export const fromURLSearchParams = (
  urlSearchParams: URLSearchParams
): QueryParams => {
  return reduce<Entry<string, string>, QueryParams>(
    (acc, entry) => multiMapAdd(acc)(...entry),
    new Map()
  )(urlSearchParams.entries());
};
