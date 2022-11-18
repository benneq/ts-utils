import { Sorting } from "./_types";

export const equal =
  <T extends string>(sorting1: Sorting<T>) =>
  (sorting2: Sorting<T>): boolean => {
    return (
      sorting1 === sorting2 ||
      (sorting1.property === sorting2.property &&
        sorting1.direction === sorting2.direction)
    );
  };
