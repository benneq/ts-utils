import { QueryParams } from "./_types";
import { reduce } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { multiMapAdd } from "@benneq/map";

export const fromURLSearchParams = (
  urlSearchParams: URLSearchParams
): QueryParams => {
  return reduce<Entry<string, string>, QueryParams>((acc, [key, value]) => {
    multiMapAdd(acc)(key, value);
    return acc;
  }, new Map())(urlSearchParams.entries());
};
