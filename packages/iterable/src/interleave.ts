import { concat } from "./concat";
import { zip } from "./zip";

type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V | undefined : never;
};

/**
 * Interleaves the elements of multiple {@link Iterable}s.
 *
 * @example
 * ```ts
 * const iterable1 = [1, 2, 3];
 * const iterable2 = [9, 8];
 * const result = interleave(iterable1, iterable2);
 * console.log(result); // 1 ... 9 ... 2 ... 8 .. 3 ... undefined
 * ```
 *
 * @todo
 * Don't yield undefined, if elements don't exist, or provide optional
 * default value.
 *
 * @param iterables - the {@link Iterable}s to interleave
 * @returns the interleaved {@link Iterable}
 */
export const interleave = <TArgs extends Iterable<unknown>[]>(
  ...iterables: TArgs
): Iterable<ExtractValue<TArgs>> => {
  return concat(zip(...iterables)) as Iterable<ExtractValue<TArgs>>;
};
