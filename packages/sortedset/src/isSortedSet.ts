import { isArray, isSorted } from "@benneq/array";
import { Comparator } from "@benneq/comparator";
import { isFunction } from "@benneq/function";
import { SortedSet } from "./_types";

export const isSortedSet = <T>(value: unknown): value is SortedSet<T> => {
  return (
    !!value &&
    typeof value === "object" &&
    "comparator" in value &&
    isFunction(value.comparator) &&
    "values" in value &&
    isArray(value.values) &&
    isSorted(value.comparator as Comparator<T>)(value.values as T[])
  );
};
