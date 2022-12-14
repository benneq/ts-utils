import { setAll } from "./setAll";

describe("map.addAll", () => {
  it("should add the given entries to the Map", () => {
    const [key1, value1, key2, value2, key3, value3] = symbolGenerator();

    const map = new Map([[key1, value1]]);

    setAll(map)([
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
    const [key1, value1, key2, value2, key3, value3] = symbolGenerator();

    const map = new Map([
      [key1, value1],
      [key2, Symbol()],
      [key3, Symbol()],
    ]);

    setAll(map)([
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
