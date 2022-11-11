import { copy } from "./copy";

describe("object.copy", () => {
  it("should create a new object instance with the same entries", () => {
    const [key, value] = symbolGenerator();

    const object = { [key]: value };

    const result = copy(object);

    expect(result).not.toBe(object);
    expect(result).toEqual({ [key]: value });
  });

  it("should not modify the given object", () => {
    const [key, value] = symbolGenerator();

    const object = { [key]: value };

    copy(object);

    expect(object).toEqual({ [key]: value });
  });
});

export {};
