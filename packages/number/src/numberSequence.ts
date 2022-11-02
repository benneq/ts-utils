/**
 * A Generator function that will start at a value and add stepSize to it for each call
 *
 * @example
 * numberSequenceGenerator(1, 2) => [1,3,5,...]
 *
 * @returns a Generator that steps through the numbers
 */
export function* numberSequence(
  value: number,
  stepSize: number
): Generator<number, void, unknown> {
  while (true) {
    yield value;
    value += stepSize;
  }
}
