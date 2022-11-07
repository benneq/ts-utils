import { multiMapAdd } from "./multiMapAdd";

describe("map.multiMapAdd", () => {
  it("should create a new values Array if key does not exist", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol[]>();

    multiMapAdd(map)(key, value);

    expect(map).toEqual(new Map([[key, [value]]]));
  });

  it("should add the given value if the key already exists", () => {
    const key = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map = new Map<symbol, symbol[]>([[key, [value1]]]);

    multiMapAdd(map)(key, value2);

    expect(map).toEqual(new Map([[key, [value1, value2]]]));
  });
});

export {};