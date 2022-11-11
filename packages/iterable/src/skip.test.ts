import { skip } from "./skip";

describe("iterable.skip", () => {
  it("should not yield the first 3 elements of the Iterable", () => {
    const iterable = skip(3)([0, 1, 2, 3, 4]);

    expectIterableToEqual(iterable, [3, 4]);
  });
});

export {};
