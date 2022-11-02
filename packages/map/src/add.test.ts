import { add } from "./add";

describe("map.add", () => {
  it("should add the given entry to the Map", () => {
    const key1 = Symbol();
    const value1 = Symbol();
    const key2 = Symbol();
    const value2 = Symbol();
    const map = new Map([[key1, value1]]);

    add(map)([key2, value2]);

    expect(map).toEqual(
      new Map([
        [key1, value1],
        [key2, value2],
      ])
    );
  });

  it("should override the entry if the key is already present", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map([[key, Symbol()]]);

    add(map)([key, value]);

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
