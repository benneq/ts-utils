/**
 * Iterates over a monotone sequence of numbers, starting with
 * `initialNumber`.
 *
 * @example
 * Iterate over `uppercaseAsciiLetterRange`
 * ```ts
 * for (const c of numberSequenceGenerator(1, 2)) {
 *   console.log(c); // 1,3,5,...
 * }
 * ```
 *
 * @example
 * Get the first 3 values of the sequence
 * ```ts
 * const [v1, v2, v3] = numberSequenceGenerator(1, 2);
 * console.log(v1); // 1
 * console.log(v3); // 3
 * console.log(v5); // 5
 * ```
 *
 * @returns a Generator that steps through the numbers
 */
export function* numberSequence(
  initialNumber: number,
  stepSize = 1
): Generator<number, void, unknown> {
  while (true) {
    yield initialNumber;
    initialNumber += stepSize;
  }
}
