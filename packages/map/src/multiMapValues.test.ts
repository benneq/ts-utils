import { multiMapValues } from "./multiMapValues";

describe("map.multiMapValues", () => {
  it("should yield all values", () => {
    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const map = new Map<symbol, symbol[]>([
      [key1, [value1, value2]],
      [key2, [value3]],
    ]);

    const result = [...multiMapValues(map)];

    expect(result).toEqual([value1, value2, value3]);
  });
});

export {};
