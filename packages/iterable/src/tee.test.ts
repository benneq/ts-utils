import { tee } from "./tee";

describe("iterable.tee", () => {
  it("should return three iterables if length is 3", () => {
    const iterable = [1, 2, 3];

    const [it1, it2, it3] = tee(3)(iterable);

    expect([...it1]).toEqual([1, 2, 3]);
    expect([...it2]).toEqual([1, 2, 3]);
    expect([...it3]).toEqual([1, 2, 3]);
  });
});

export {};
