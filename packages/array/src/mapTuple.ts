import { Mapper } from "@benneq/function";

/**
 * Maps each element of a tuple individually using its own {@link Mapper}.
 *
 * @example
 * ```ts
 * const tuple = [1, "abc"];
 *
 * const mapper = mapTuple(
 *   (num) => num > 0,
 *   (str) => str.length,
 * );
 *
 * const result = mapper(tuple);
 *
 * console.log(result); // [true, 3]
 * ```
 *
 * @paramType TArgs - the type of the input tuple
 * @paramType RArgs - the type of the mapped output tuple
 * @param mappers - the {@link Mapper}s to use
 * @returns the mapped tuple
 */
export const mapTuple =
  <
    TArgs extends unknown[],
    RArgs extends { [index in keyof TArgs]: unknown }
  >(mappers: { [index in keyof TArgs]: Mapper<TArgs[index], RArgs[index]> }) =>
  (tuple: TArgs): RArgs => {
    return mappers.map((mapper, index) => mapper(tuple[index])) as RArgs;
  };
