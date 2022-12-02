import { pipe } from "@benneq/function";
import { ValueOrProvider, valueOrProviderResult } from "@benneq/object";
import { flatMap } from "./flatMap";
import { skip } from "./skip";

/**
 *
 * @typeParam T - the {@link Iterable} value type
 * @param separator
 * @returns
 */
export const join = <T>(separator: ValueOrProvider<T>) => {
  return pipe(
    flatMap((value: T) => [valueOrProviderResult(separator), value]),
    skip<T>(1)
  );
};
