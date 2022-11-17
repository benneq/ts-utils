import { isArray } from "@benneq/array";
import { isString } from "@benneq/string";

/**
 * Parses a mixed object into {@link URLSearchParams}
 *
 * @example
 * Parse mixed object
 * ```ts
 * const mixedObject = {
 *   k1: "v1",
 *   k2: null
 * };
 *
 * const urlSearchParams = fromMixedObject(mixedObject);
 * console.log(urlSearchParams); // URLSearchParams([["k1", "v1"]])
 * ```
 *
 * @returns the parsed {@link URLSearchParams} object
 */
export const fromMixedObject = (
  obj: Record<string, string | string[] | null | undefined>
): URLSearchParams => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isString(value)) {
      acc.set(key, value);
    } else if (isArray(value)) {
      value.forEach((v) => acc.append(key, v));
    }
    return acc;
  }, new URLSearchParams());
};
