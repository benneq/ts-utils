import { removeAll } from "./removeAll";

describe("multimap.removeAll", () => {
  it("should remove the values from the key", () => {
    const [key, value1, value2, value3] = symbolGenerator();

    const map = new Map<symbol, symbol[]>([[key, [value1, value2, value3]]]);

    removeAll(map)([
      [key, value1],
      [key, value2],
    ]);

    expect(map).toEqual(new Map([[key, [value3]]]));
  });
});

export {};
