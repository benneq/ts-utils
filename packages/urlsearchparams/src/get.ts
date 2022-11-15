import { pipe } from "@benneq/function";
import { filter, map, toArray } from "@benneq/iterable";
import { Entry, isUndefined } from "@benneq/object";
import {
  isString,
  stringPredicate,
  StringPredicateInput,
} from "@benneq/string";

/**
 * Returns all values from a {@link URLSearchParams} object matching the
 * `keyPredicate`.
 *
 * @example
 * ```ts
 * const getValues = get("k1");
 *
 * const urlSearchParams = new URLSearchParams([
 *   ["k1", "v1"],
 *   ["k2", "v2"],
 * ]);
 *
 * const values = getValues(urlSearchParams);
 * console.log(values); // ["v1"]
 * ```
 */
export const get = (
  keyPredicate?: StringPredicateInput
): ((urlSearchParams: URLSearchParams) => Iterable<string>) => {
  if (isUndefined(keyPredicate)) {
    return (urlSearchParams) => Array.from(urlSearchParams.values());
  } else if (isString(keyPredicate)) {
    return (urlSearchParams) => urlSearchParams.getAll(keyPredicate) || [];
  } else {
    const predicate = stringPredicate(keyPredicate);
    return pipe(
      filter<Entry<string, string>>(([key]) => predicate(key)),
      map<Entry<string, string>, string>(([_key, value]) => value),
      toArray<string>
    );
  }
};
