import { addAll } from "./addAll";

describe("multimap.addAll", () => {
  it("should create a new values Array if key does not exist", () => {
    const [key, value1, value2] = symbolGenerator();

    const map = new Map<symbol, symbol[]>();

    addAll(map)([
      [key, value1],
      [key, value2],
    ]);

    expect(map).toEqual(new Map([[key, [value1, value2]]]));
  });

  it("should add the given value if the key already exists", () => {
    const [key1, value1, key2, value2] = symbolGenerator();

    const map = new Map<symbol, symbol[]>([[key1, [value1]]]);

    addAll(map)([
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