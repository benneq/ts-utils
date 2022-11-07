import { Mapper } from "@benneq/function";
import { reduce } from "@benneq/iterable";
import { multiMapAdd } from "@benneq/map";
import { Entry, isNotUndefined } from "@benneq/object";
import { QueryParams } from "./_types";

export type SanitizeMapper = Mapper<string, string | undefined>;

export const sanitize = (
  keyMapper: SanitizeMapper,
  valueMapper: SanitizeMapper
): ((queryParams: QueryParams) => QueryParams) => {
  return reduce<Entry<string, string[]>, QueryParams>((acc, [key, values]) => {
    key = keyMapper(key)!;

    if (isNotUndefined(key)) {
      values.forEach((value) => {
        value = valueMapper(value)!;
        if (isNotUndefined(value)) {
          multiMapAdd(acc)(key, value);
        }
      });
    }

    return acc;
  }, new Map());
};
