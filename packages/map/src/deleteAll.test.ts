import { deleteAll } from "./deleteAll";

describe("map.deleteAll", () => {
  it("should remove the given values from the Set", () => {
    const key1 = Symbol();
    const value1 = Symbol();
    const key2 = Symbol();
    const value2 = Symbol();
    const key3 = Symbol();
    const value3 = Symbol();
    const map = new Map([
      [key1, value1],
      [key2, value2],
      [key3, value3],
    ]);

    deleteAll(map)([key2, key3]);

    expect(map).toEqual(new Map([[key1, value1]]));
  });

  it("should not modify the Set if the Set does not contain the values", () => {
    const key1 = Symbol();
    const value1 = Symbol();
    const key2 = Symbol();
    const value2 = Symbol();
    const key3 = Symbol();
    const value3 = Symbol();
    const map = new Map([[key1, value1]]);

    deleteAll(map)([key2, key3]);

    expect(map).toEqual(new Map([[key1, value1]]));
  });
});

export {};
