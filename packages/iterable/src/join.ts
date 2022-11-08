import { pipe } from "@benneq/function";
import { ValueOrProvider, valueOrProviderResult } from "@benneq/object";
import { flatMap } from "./flatMap";
import { skip } from "./skip";

export const join =
  <T>(separator: ValueOrProvider<T>) =>
  (iterable: Iterable<T>): Iterable<T> => {
    return pipe(
      flatMap((value: T) => [valueOrProviderResult(separator), value]),
      skip<T>(1)
    )(iterable);
  };
