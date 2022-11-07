import { multiMapRemoveAll } from "./multiMapRemoveAll";

describe("map.multiMapRemoveAll", () => {
  it("should remove the values from the key", () => {
    const key = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const map = new Map<symbol, symbol[]>([[key, [value1, value2, value3]]]);

    multiMapRemoveAll(map)([
      [key, value1],
      [key, value2],
    ]);

    expect(map).toEqual(new Map([[key, [value3]]]));
  });
});

export {};
