type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V : never;
};

/**
 *
 * @param iterables
 * @returns
 */
export function* zip<RArgs extends Iterable<unknown>[]>(
  ...iterables: RArgs
): Iterable<ExtractValue<RArgs>> {
  const iterators = iterables.map<Iterator<unknown, unknown>>((iterable) =>
    iterable[Symbol.iterator]()
  );

  while (true) {
    const iteratorResults = iterators.map((iterator) => iterator.next());

    if (iteratorResults.every((result) => result.done)) {
      return;
    }

    yield iteratorResults.map((result) => result.value) as ExtractValue<RArgs>;
  }
}
