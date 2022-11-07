import { multiMapEntries } from "./multiMapEntries";

describe("map.multiMapEntries", () => {
  it("should yield all key-value pairs", () => {
    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const map = new Map<symbol, symbol[]>([
      [key1, [value1, value2]],
      [key2, [value3]],
    ]);

    const result = [...multiMapEntries(map)];

    expect(result).toEqual([
      [key1, value1],
      [key1, value2],
      [key2, value3],
    ]);
  });
});

export {};
