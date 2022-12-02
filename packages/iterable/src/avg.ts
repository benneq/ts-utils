/**
 * Calculates the average of all {@link number}s of an {@link Iterable}.
 *
 * @example
 * ```ts
 * const result = avg([1,2,3]);
 * console.log(result); // 2
 * ```
 *
 * @see {@link reduce} and {@link sum} for similar operations.
 *
 * @param iterable - the {@link Iterable} to average
 * @returns the average of all {@link number}s, or `undefined` if {@link Iterable} was empty
 */
export const avg = (
  iterable: Iterable<number>,
  length = 0,
  sum = 0
): number | undefined => {
  for (const value of iterable) {
    length++;
    sum += value;
  }

  return length ? sum / length : undefined;
};
