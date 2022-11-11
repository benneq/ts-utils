import { flatMap } from "@benneq/iterable";
import { values } from "@benneq/multimap";
import { isUndefined } from "@benneq/object";
import {
  isString,
  stringPredicate,
  StringPredicateInput,
} from "@benneq/string";
import { QueryParams } from "./_types";

/**
 * Returns all values from @param queryParams matching the @param keyPredicate
 *
 * @example
 * ```ts
 * const getValues = get("k1");
 *
 * const queryParams = new Map([
 *   ["k1", ["v1"]],
 *   ["k2", ["v2"]],
 * ]);
 *
 * const values = getValues(queryParams);
 * console.log(values); // ["v1"]
 * ```
 */
export const get = (
  keyPredicate?: StringPredicateInput
): ((queryParams: QueryParams) => string[]) => {
  if (isUndefined(keyPredicate)) {
    return (queryParams) => Array.from(values(queryParams));
  } else if (isString(keyPredicate)) {
    return (queryParams) => queryParams.get(keyPredicate) || [];
  } else {
    return (queryParams) => {
      const predicate = stringPredicate(keyPredicate);
      return Array.from(
        flatMap(([key, value]: [string, string[]]) =>
          predicate(key) ? value : []
        )(queryParams.entries())
      );
    };
  }
};
