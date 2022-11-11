import { join } from "./join";

describe("iterable.join", () => {
  it("should be done immediatly if Iterable is empty", () => {
    const iterable = join(1)([]);

    expectIterableToEqual(iterable, []);
  });

  it("should be yield a single value if Iterator only has a single element", () => {
    const iterable = join(1)([3]);

    expectIterableToEqual(iterable, [3]);
  });

  it("should yield all elements of the iterable interleaved with the separator", () => {
    const iterable = join(1)([1, 2, 3]);

    expectIterableToEqual(iterable, [1, 1, 2, 1, 3]);
  });
});

export {};
