import { Provider } from "@benneq/function";

/**
 *
 * @typeParam T - the {@link Iterable} value type
 * @param provider
 */
export function* generate<T>(provider: Provider<T>): Iterable<T> {
  while (true) {
    yield provider();
  }
}
