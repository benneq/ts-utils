import { Predicate } from "@benneq/predicate";
import { findIndex } from "./findIndex";

export const some =
  <T>(predicate: Predicate<[T, number, T[]]>, fromIndex?: number) =>
  (array: T[]) => {
    return findIndex(predicate, fromIndex)(array) >= 0;
  };
