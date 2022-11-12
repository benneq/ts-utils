import { concat } from "./concat";
import { zip } from "./zip";

type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V | undefined : never;
};

/**
 *
 * @param iterables
 * @returns
 */
export const interleave = <TArgs extends Iterable<unknown>[]>(
  ...iterables: TArgs
): Iterable<ExtractValue<TArgs>> => {
  return concat<any>(zip(...iterables));
};
