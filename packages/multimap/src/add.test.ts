import { add } from "./add";

describe("multimap.add", () => {
  it("should create a new values Array if key does not exist", () => {
    const [key, value] = symbolGenerator();

    const map = new Map<symbol, symbol[]>();

    add(map)(key, value);

    expect(map).toEqual(new Map([[key, [value]]]));
  });

  it("should add the given value if the key already exists", () => {
    const [key, value1, value2] = symbolGenerator();

    const map = new Map<symbol, symbol[]>([[key, [value1]]]);

    add(map)(key, value2);

    expect(map).toEqual(new Map([[key, [value1, value2]]]));
  });
});

export {};
