import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { stringPredicate } from "./stringPredicate";

describe("string.stringPredicate", () => {
  it("should match String argument", () => {
    expect(stringPredicate("a")("a")).toBe(true);
    expect(stringPredicate("a")("b")).toBe(false);
  });

  it("should match Array argument", () => {
    expect(stringPredicate(["a", "b"])("a")).toBe(true);
    expect(stringPredicate(["a", "b"])("b")).toBe(true);
    expect(stringPredicate(["a", "b"])("c")).toBe(false);
  });

  it("should match RegExp argument", () => {
    expect(stringPredicate(/a/)("a")).toBe(true);
    expect(stringPredicate(/a.+/)("ab")).toBe(true);
    expect(stringPredicate(/a.*/)("c")).toBe(false);
  });

  it("should match Function argument", () => {
    expect(stringPredicate(alwaysTrue)("a")).toBe(true);
    expect(stringPredicate((s) => s === "a")("a")).toBe(true);
    expect(stringPredicate(alwaysFalse)("a")).toBe(false);
  });
});

export {};
