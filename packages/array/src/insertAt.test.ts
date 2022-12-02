import { insertAt } from "./insertAt";

describe("array.insertAt", () => {
  it("should insert the provided values at the given index", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array: unknown[] = [];

    insertAt(0, value1, value2)(array);
    expect(array).toEqual([value1, value2]);

    insertAt(-1, value3)(array);
    expect(array).toEqual([value1, value3, value2]);
  });

  it("should not change the Array if no value is provided", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    insertAt(0)(array);
    expect(array).toEqual([value1, value2]);

    insertAt(1)(array);
    expect(array).toEqual([value1, value2]);
  });
});

export {};
