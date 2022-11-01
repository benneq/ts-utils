import { Provider } from "@benneq/func";

export function* fromFunction<T>(
  provider: Provider<T>
): Generator<T, void, unknown> {
  while (true) {
    yield provider();
  }
}
