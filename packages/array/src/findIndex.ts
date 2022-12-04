import { Predicate } from "@benneq/predicate";

type FindIndex = <T, A extends ArrayLike<T> = ArrayLike<T>>(
  predicate: Predicate<[T, number, A]>,
  fromIndex?: number
) => (array: A) => number;

export const findIndex: FindIndex = <T, A extends ArrayLike<T> = ArrayLike<T>>(
  predicate: Predicate<[T, number, A]>,
  fromIndex = 0
) => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(fromIndex >= 0);
  }

  return (
    array: A,
    // internal variables:
    i = fromIndex
  ): number => {
    for (; i < array.length; i++) {
      if (predicate(array[i] as T, i, array)) {
        return i;
      }
    }
    return -1;
  };
};
