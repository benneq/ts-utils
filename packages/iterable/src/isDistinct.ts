import { identity, Mapper } from "@benneq/function";
import { Predicate } from "@benneq/predicate";

/**
 * Creates a {@link Predicate} that checks if an {@link Iterable} contains only
 * unique values.
 *
 * @example
 * ```ts
 * const iterable = [1,2,3,2];
 * const result = isDistinct(iterable);
 * console.log(result); // false
 * ```
 *
 * @param keyExtractor - the optional key extractor, defaults to {@link identity}
 * @returns the new {@link Predicate}
 */
export const isDistinct =
  <T>(keyExtractor: Mapper<T, unknown> = identity): Predicate<[Iterable<T>]> =>
  (iterable) => {
    const seen = new Set();

    for (const value of iterable) {
      const key = keyExtractor(value);

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
    }

    return true;
  };
