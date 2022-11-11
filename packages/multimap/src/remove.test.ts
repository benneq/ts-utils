import { remove } from "./remove";

describe("multimap.remove", () => {
  it("should remove the given value from the key", () => {
    const [key, value1, value2] = symbolGenerator();

    const map = new Map<symbol, symbol[]>([[key, [value1, value2]]]);

    remove(map)(key, value1);

    expect(map).toEqual(new Map([[key, [value2]]]));
  });

  it("should remove the key if all values were removed", () => {
    const [key, value] = symbolGenerator();

    const map = new Map<symbol, symbol[]>([[key, [value]]]);

    remove(map)(key, value);

    expect(map).toEqual(new Map());
  });
});

export {};
