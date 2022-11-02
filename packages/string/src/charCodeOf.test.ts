import { charCodeOf } from "./charCodeOf";

describe("iterable.charCodeOf", () => {
  it("should return the CharCode of the first character", () => {
    expect(charCodeOf("A")).toBe(65);
    expect(charCodeOf("Ab")).toBe(65);
  });

  it("should return NaN if string is empty", () => {
    expect(charCodeOf("")).toBe(NaN);
  });
});

export {};
