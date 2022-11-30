import { Predicate } from "@benneq/predicate";

export const some =
  <T>(predicate: Predicate<[T]>, startIndex = 0) =>
  (array: T[]) => {
    for (let i = startIndex; i < array.length; i++) {
      if (predicate(array[i] as T)) {
        return true;
      }
    }
    return false;
  };
