import { nonWhitespaceRegExp } from "./nonWhitespaceRegExp";

describe("regexp.whitespaceRegExp", () => {
  it("should not match space", () => {
    expect(nonWhitespaceRegExp.test(" ")).toBe(false);
  });

  it("should match emoji", () => {
    expect(nonWhitespaceRegExp.test("💩")).toBe(true);
  });

  it("should match umlaut", () => {
    expect(nonWhitespaceRegExp.test("ä")).toBe(true);
  });
});

export {};
