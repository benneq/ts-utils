import { insertAt } from "./insertAt";

describe("array.insertAt", () => {
  it("should insert the provided values at the given index", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array: unknown[] = [];

    insertAt(array, 0, value1, value2);
    expect(array).toEqual([value1, value2]);

    insertAt(array, -1, value3);
    expect(array).toEqual([value1, value3, value2]);
  });

  it("should not change the Array if no value is provided", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    insertAt(array, 0);
    expect(array).toEqual([value1, value2]);

    insertAt(array, 1);
    expect(array).toEqual([value1, value2]);
  });
});

export {};
