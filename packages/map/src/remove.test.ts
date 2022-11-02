import { remove } from "./remove";

describe("map.remove", () => {
  it("should remove the given key from the Map", () => {
    const key1 = Symbol();
    const value1 = Symbol();
    const key2 = Symbol();
    const value2 = Symbol();
    const map = new Map([
      [key1, value1],
      [key2, value2],
    ]);

    remove(map)(key2);

    expect(map).toEqual(new Map([[key1, value1]]));
  });

  it("should not modify the Map if the Map does not contain the key", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map([[key, value]]);

    remove(map)(Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
