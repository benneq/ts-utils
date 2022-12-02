import { deleteAt } from "./deleteAt";

describe("array.removeAt", () => {
  it("should remove the Array element at the given index", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    deleteAt(1)(array);

    expect(array).toEqual([value1]);
  });

  it("should not modify the Array if it is empty", () => {
    const array: unknown[] = [];

    deleteAt(1)(array);

    expect(array).toEqual([]);
  });

  it("should remove the Array element from the end if the given index is negative", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    deleteAt(-2)(array);

    expect(array).toEqual([value2]);
  });

  it("should not modify the Array if index is out of bounds", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    deleteAt(2)(array);

    expect(array).toEqual([value1, value2]);
  });

  it("should not modify the Array if deleteCount <= 0", () => {
    const [value] = symbolGenerator();

    const array = [value];

    deleteAt(0, 0)(array);

    expect(array).toEqual([value]);

    deleteAt(0, -1)(array);

    expect(array).toEqual([value]);
  });

  it("should remove multiple elements if deleteCount > 1", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    deleteAt(1, 2)(array);

    expect(array).toEqual([value1]);
  });
});

export {};
