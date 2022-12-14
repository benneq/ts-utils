type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V : never;
};

/**
 * Creates an {@link Iterable} of grouped elements from multiple {@link Iterable}s.
 *
 * @example
 * ```ts
 * const iterable1 = [1, 2, 3];
 * const iterable2 = ["a", "b"];
 *
 * const iterable = zip(iterable1, iterable2);
 *
 * console.log(iterable); // [1, "a"], [2, "b"], [3, undefined]
 * ```
 *
 * @see {@link chunk}, {@link concat}, {@link flatMap} and {@link pairwise} for
 * similar operations.
 *
 * @param iterables - the {@link Iterable}s to zip
 * @returns - the zipped {@link Iterable}
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
