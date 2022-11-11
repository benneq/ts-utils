import { entries } from "./entries";

describe("multimap.entries", () => {
  it("should yield all key-value pairs", () => {
    const [key1, value1, key2, value2, value3] = symbolGenerator();

    const map = new Map<symbol, symbol[]>([
      [key1, [value1, value2]],
      [key2, [value3]],
    ]);

    const result = [...entries(map)];

    expect(result).toEqual([
      [key1, value1],
      [key1, value2],
      [key2, value3],
    ]);
  });
});

export {};
