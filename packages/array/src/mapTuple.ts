import { Mapper } from "@benneq/function";

/**
 * Maps each element of a tuple individually using its own {@link Mapper}.
 *
 * @example
 * ```ts
 * const tuple = [1, "abc"];
 *
 * const result = mapTuple(
 *   (num) => num > 0,
 *   (str) => str.length,
 * );
 *
 * console.log(result); // [true, 3]
 * ```
 *
 * @param mappers - the {@link Mapper}s to use
 * @returns the mapped tuple
 */
export const mapTuple =
  <
    TArgs extends unknown[],
    RArgs extends { [key in keyof TArgs]: unknown }
  >(mappers: { [key in keyof TArgs]: Mapper<TArgs[key], RArgs[key]> }) =>
  (tuple: TArgs): RArgs => {
    return mappers.map((mapper, i) => mapper(tuple[i])) as RArgs;
  };
