import { multiMapAddAll } from "./multiMapAddAll";

describe("map.multiMapAddAll", () => {
  it("should create a new values Array if key does not exist", () => {
    const key = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map = new Map<symbol, symbol[]>();

    multiMapAddAll(map)([
      [key, value1],
      [key, value2],
    ]);

    expect(map).toEqual(new Map([[key, [value1, value2]]]));
  });

  it("should add the given value if the key already exists", () => {
    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map = new Map<symbol, symbol[]>([[key1, [value1]]]);

    multiMapAddAll(map)([
      [key1, value2],
      [key2, value1],
    ]);

    expect(map).toEqual(
      new Map([
        [key1, [value1, value2]],
        [key2, [value1]],
      ])
    );
  });
});

export {};
