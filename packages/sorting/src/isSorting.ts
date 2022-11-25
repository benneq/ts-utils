import { isObject } from "@benneq/object";
import { isString } from "@benneq/string";
import { isSortingDirection } from "./isSortingDirection";
import { Sorting } from "./_types";

export const isSorting = <T extends string>(
  value: unknown
): value is Sorting<T> => {
  return (
    isObject(value) &&
    "property" in value &&
    isString(value["property"]) &&
    "direction" in value &&
    isSortingDirection(value["direction"])
  );
};
