import { Mapper } from "@benneq/function";
import { reduce } from "@benneq/iterable";
import { Entry, isNotUndefined } from "@benneq/object";

export type SanitizeMapper = Mapper<
  Entry<string, string>,
  Entry<string | undefined, string | undefined>
>;

/**
 * Creates a sanitizer for {@link URLSearchParams}, that can be used to for
 * example trim strings and remove unusable keys and values.
 *
 * @example
 * Trim all keys and values and remove entries with empty strings
 * ```ts
 * const sanitizer = sanitize(([key, value]) => [
 *   key.trim() || undefined,
 *   value.trim() || undefined,
 * ]);
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
 * @param mapper - the {@link Mapper} for the {@link Entry}s
 * @returns the sanitized {@link URLSearchParams}
 */
export const sanitize = (
  mapper: SanitizeMapper
): ((urlSearchParams: URLSearchParams) => URLSearchParams) => {
  return reduce((acc, entry) => {
    const [key, value] = mapper(entry);

    if (isNotUndefined(key) && isNotUndefined(value)) {
      acc.append(key, value);
    }

    return acc;
  }, new URLSearchParams());
};
