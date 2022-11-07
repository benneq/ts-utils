import { isArray, isEmpty } from "@benneq/array";
import { isString } from "@benneq/string";
import { QueryParams } from "./_types";

export const fromMixedObject = (
  obj: Record<string, string | string[] | null | undefined>
): QueryParams => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isString(value)) {
      acc.set(key, [value]);
    } else if (isArray(value) && !isEmpty(value)) {
      acc.set(key, value);
    }
    return acc;
  }, new Map());
};
