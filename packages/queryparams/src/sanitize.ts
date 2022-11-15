import { Mapper } from "@benneq/function";
import { reduce } from "@benneq/iterable";
import { isNotUndefined } from "@benneq/object";

export type SanitizeMapper = Mapper<string, string | undefined>;

/**
 * Sanitize {@link URLSearchParams}, trim strings, remove unusable keys and values.
 *
 * @example
 * Trim all keys and values and remove empty strings
 * ```ts
 * const sanitizer = sanitize(
 *   (key) => key.trim() || undefined,
 *   (value) => value.trim() || undefined
 * );
 *
 * const urlSearchParams = new Map([
 *   [" k ", ["v1", ""]],
 *   ["", ["v2", "v3"]],
 * ]);
 *
 * const sanitizedUrlSearchParams = sanitizer(urlSearchParams);
 * console.log(sanitizedUrlSearchParams); // URLSearchParams([["k", "v1"]])
 * ```
 *
 * @param keyMapper
 * @param valueMapper
 * @returns the sanitized {@link URLSearchParams}
 */
export const sanitize = (
  keyMapper: SanitizeMapper,
  valueMapper: SanitizeMapper
): ((urlSearchParams: URLSearchParams) => URLSearchParams) => {
  return reduce((acc, [key, value]) => {
    const mappedKey = keyMapper(key);

    if (isNotUndefined(mappedKey)) {
      const mappedValue = valueMapper(value);
      if (isNotUndefined(mappedValue)) {
        acc.append(mappedKey, mappedValue);
      }
    }

    return acc;
  }, new URLSearchParams());
};
