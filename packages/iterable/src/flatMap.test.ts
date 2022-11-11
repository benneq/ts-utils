import { flatMap } from "./flatMap";

describe("iterable.flatMap", () => {
  it("should yield yield every element of each Iterable in order", () => {
    function* innerIterable(value: number) {
      yield value;
      yield value * 2;
    }
    const mapper = (value: number) => innerIterable(value);
    const iterable = flatMap(mapper)([0, 1, 2]);

    expectIterableToEqual(iterable, [0, 0, 1, 2, 2, 4]);
  });
});

export {};
