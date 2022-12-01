import { Predicate } from "@benneq/predicate";

export const findIndex =
  <T>(predicate: Predicate<[T, number, T[]]>, fromIndex = 0) =>
  (array: T[]) => {
    for (let i = fromIndex; i < array.length; i++) {
      if (predicate(array[i] as T, i, array)) {
        return i;
      }
    }
    return -1;
  };
