import { Provider } from "@benneq/function";

export function* generate<T>(provider: Provider<T>): Iterable<T> {
  while (true) {
    yield provider();
  }
}
