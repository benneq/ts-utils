import { isArray } from "@benneq/array";
import { every } from "@benneq/iterable";
import { isMap } from "@benneq/map";
import { Entry } from "@benneq/object";
import { isString } from "@benneq/string";
import { QueryParams } from "./_types";

/**
 * Checks if a `value` is a {@link QueryParams} object.
 *
 * @example
 * Returns `true` if the value is a {@link QueryParams} object
 * ```ts
 * const value = new Map([["a", ["b"]]]);
 * const result = isQueryParams(value);
 * console.log(result); // true
 * ```
 *
 * @param value
 * @returns `true` if `value` is a {@link QueryParams} object, otherwise `false`
 */
export const isQueryParams = (value: unknown): value is QueryParams => {
  return (
    isMap(value) &&
    every<Entry>(([key, values]) => {
      return isString(key) && isArray(values) && values.every(isString);
    })(value)
  );
};
