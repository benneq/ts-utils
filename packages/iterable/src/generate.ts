import { Provider } from "@benneq/function";

export function* generate<T>(
  provider: Provider<T>
): Generator<T, void, unknown> {
  while (true) {
    yield provider();
  }
}
