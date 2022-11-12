import { Provider } from "@benneq/function";

/**
 *
 * @example
 * ```ts
 * let counter = 0;
 * const numbers = generate(() => i++);
 * const [value1, value2] = numbers;
 * console.log(value1, value2); // 0, 1
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param provider - a {@link Function} that produces values
 */
export function* generate<T>(provider: Provider<T>): Iterable<T> {
  while (true) {
    yield provider();
  }
}
