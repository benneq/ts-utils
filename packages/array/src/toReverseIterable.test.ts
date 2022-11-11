import { toReverseIterable } from "./toReverseIterable";

describe("array.toReverseIterable", () => {
  it("should be done immediatly if array is empty", () => {
    const iterable = toReverseIterable([]);

    expectIterableToEqual(iterable, []);
  });

  it("should yield the elements in reverse order", () => {
    const [value1, value2, value3] = symbolGenerator();

    const iterable = toReverseIterable([value1, value2, value3]);

    expectIterableToEqual(iterable, [value3, value2, value1]);
  });
});

export {};
