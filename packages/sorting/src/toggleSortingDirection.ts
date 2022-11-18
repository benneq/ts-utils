import { sorting } from "./sorting";
import { Sorting } from "./_types";

export const toggleDirection = <T extends string>(
  value: Sorting<T>
): Sorting<T> => {
  return sorting(value.property, value.direction === "asc" ? "desc" : "asc");
};
