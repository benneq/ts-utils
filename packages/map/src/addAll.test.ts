import { addAll } from "./addAll";

describe("map.addAll", () => {
  it("should add the given entries to the Map", () => {
    const key1 = Symbol();
    const value1 = Symbol();
    const key2 = Symbol();
    const value2 = Symbol();
    const key3 = Symbol();
    const value3 = Symbol();
    const map = new Map([[key1, value1]]);

    addAll(map)([
      [key2, value2],
      [key3, value3],
    ]);

    expect(map).toEqual(
      new Map([
        [key1, value1],
        [key2, value2],
        [key3, value3],
      ])
    );
  });

  it("should override the entries if the keys are already present", () => {
    const key1 = Symbol();
    const value1 = Symbol();
    const key2 = Symbol();
    const value2 = Symbol();
    const key3 = Symbol();
    const value3 = Symbol();
    const map = new Map([
      [key1, value1],
      [key2, Symbol()],
      [key3, Symbol()],
    ]);

    addAll(map)([
      [key2, value2],
      [key3, value3],
    ]);

    expect(map).toEqual(
      new Map([
        [key1, value1],
        [key2, value2],
        [key3, value3],
      ])
    );
  });
});

export {};
