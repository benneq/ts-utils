import { isObject } from "@benneq/object";
import { isString } from "@benneq/string";
import { isSortingDirection } from "./isSortingDirection";
import { Sorting } from "./_types";

export const isSorting = <T extends string>(
  value: unknown
): value is Sorting<T> => {
  return (
    isObject(value) &&
    isString(value["property"]) &&
    isSortingDirection(value["direction"])
  );
};
