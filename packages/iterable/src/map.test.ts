import { map } from "./map";

describe("iterable.map", () => {
  it("it should yield the mapped value for each element of the Iterable", () => {
    const iterable = map((value) => String(value))([0, 1, 2]);

    expectIterableToEqual(iterable, ["0", "1", "2"]);
  });
});

export {};
