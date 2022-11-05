import { groupBy } from "./groupBy";

describe("iterable.groupBy", () => {
  it("should group by the mapped key", () => {
    const map = groupBy<number, number>((x) => x % 2)([1, 2, 1, 3]);

    expect(map).toEqual(
      new Map([
        [1, [1, 1, 3]],
        [0, [2]],
      ])
    );
  });
});

export {};
