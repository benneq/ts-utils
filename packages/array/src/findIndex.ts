import { Predicate } from "@benneq/predicate";

export const findIndex = <T>(
  predicate: Predicate<[T, number, T[]]>,
  fromIndex = 0
) => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(fromIndex >= 0);
  }

  return (array: T[]): number => {
    for (let i = fromIndex; i < array.length; i++) {
      if (predicate(array[i] as T, i, array)) {
        return i;
      }
    }
    return -1;
  };
};
