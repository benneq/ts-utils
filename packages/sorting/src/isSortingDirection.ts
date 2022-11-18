import { isString } from "@benneq/string";
import { SortingDirection } from "./_types";

const sortingDirections = ["asc", "desc"] as SortingDirection[];

/**
 * Checks if a value is {@link SortingDirection}, i.e. is `"asc"` or `"desc"`.
 *
 * @example
 * isSortingDirection("asc") => true
 * isSortingDirection(1) => false
 *
 * @param value - the value to check
 * @returns `true` if `value` is a {@link SortingDirection}, otherwise `false`
 */
export const isSortingDirection = (
  value: unknown
): value is SortingDirection => {
  return (
    isString(value) && sortingDirections.includes(value as SortingDirection)
  );
};
