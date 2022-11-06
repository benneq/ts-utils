import { concat } from "./concat";
import { zip } from "./zip";

type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V | undefined : never;
};

export const interleave = <TArgs extends Iterable<unknown>[]>(
  ...iterables: TArgs
): Generator<ExtractValue<TArgs>, void, unknown> => {
  return concat<any>(zip(...iterables));
};
