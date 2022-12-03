import { generate } from "./generate";

describe("array.generate", () => {
  it("should return an Array of the given length", () => {
    const result = generate(5, () => Symbol());

    expect(result.length).toBe(5);
  });

  it("should return the generated value for each index", () => {
    const [value1, value2, value3] = symbolGenerator();
    const lookup = [value1, value2, value3];

    const result = generate(3, (i) => lookup[i]);

    expect(result).toEqual(lookup);
  });
});

export {};
