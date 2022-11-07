import { multiMapRemove } from "./multiMapRemove";

describe("map.multiMapRemove", () => {
  it("should remove the given value from the key", () => {
    const key = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map = new Map<symbol, symbol[]>([[key, [value1, value2]]]);

    multiMapRemove(map)(key, value1);

    expect(map).toEqual(new Map([[key, [value2]]]));
  });
});

export {};
