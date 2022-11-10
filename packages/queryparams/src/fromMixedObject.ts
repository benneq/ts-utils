import { isArray, isEmpty } from "@benneq/array";
import { isString } from "@benneq/string";
import { QueryParams } from "./_types";

/**
 * Parses a mixed object into {@link QueryParams}
 *
 * @example
 * Parse mixed object
 * ```ts
 * const mixedObject = {
 *   k1: "v1",
 *   k2: null
 * };
 *
 * const queryParams = fromMixedObject(mixedObject);
 * console.log(queryParams); // Map([["k1", ["v1"]]])
 * ```
 *
 * @returns the parsed {@link QueryParams} object
 */
export const fromMixedObject = (
  obj: Record<string, string | string[] | null | undefined>
): QueryParams => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isString(value)) {
      return acc.set(key, [value]);
    } else if (isArray(value) && !isEmpty(value)) {
      return acc.set(key, value);
    }
    return acc;
  }, new Map() as QueryParams);
};
