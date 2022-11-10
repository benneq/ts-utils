import { Mapper } from "@benneq/function";
import { reduce } from "@benneq/iterable";
import { add } from "@benneq/multimap";
import { isNotUndefined } from "@benneq/object";
import { QueryParams } from "./_types";

export type SanitizeMapper = Mapper<string, string | undefined>;

/**
 * Sanitize {@link QueryParams}, trim strings, remove unusable keys and values.
 *
 * @example
 * Trim all keys and values and remove empty strings
 * ```ts
 * const sanitizer = sanitize(
 *   (key) => key.trim() || undefined,
 *   (value) => value.trim() || undefined
 * );
 *
 * const queryParams = new Map([
 *   [" k ", ["v1", ""]],
 *   ["", ["v2", "v3"]],
 * ]);
 *
 * const sanitizedQueryParams = sanitizer(queryParams);
 * console.log(sanitizedQueryParams); // Map([["k", ["v1"]]])
 * ```
 *
 * @param keyMapper
 * @param valueMapper
 * @returns the sanitized {@link QueryParams}
 */
export const sanitize = (
  keyMapper: SanitizeMapper,
  valueMapper: SanitizeMapper
): ((queryParams: QueryParams) => QueryParams) => {
  return reduce((acc, [key, values]) => {
    key = keyMapper(key) as string;

    if (isNotUndefined(key)) {
      values.forEach((value) => {
        value = valueMapper(value) as string;
        if (isNotUndefined(value)) {
          add(acc)(key, value);
        }
      });
    }

    return acc;
  }, new Map() as QueryParams);
};
