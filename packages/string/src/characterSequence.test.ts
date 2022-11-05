import { characterSequence } from "./characterSequence";
import { lowercaseAsciiLetterRange } from "./lowercaseAsciiLetterRange";

describe("string.characterSequence", () => {
  it("should start with range start if no value was provided", () => {
    const it = characterSequence(lowercaseAsciiLetterRange)[Symbol.iterator]();

    expect(it.next().value).toBe("a");
    expect(it.next().value).toBe("b");
    expect(it.next().value).toBe("c");
    expect(it.next().done).toBe(false);
  });

  it("should generate the same letter if stepSize is 0", () => {
    const it = characterSequence(lowercaseAsciiLetterRange, "", 0)[
      Symbol.iterator
    ]();
    expect(it.next().done).toBe(true);
  });

  it("should stop after reaching the end of the range", () => {
    const it = characterSequence(lowercaseAsciiLetterRange, "xx")[
      Symbol.iterator
    ]();
    expect(it.next().value).toBe("x");
    expect(it.next().value).toBe("y");
    expect(it.next().value).toBe("z");
    expect(it.next().done).toBe(true);
  });

  it("should work with stepSize > 1", () => {
    const it = characterSequence(lowercaseAsciiLetterRange, "w", 2)[
      Symbol.iterator
    ]();
    expect(it.next().value).toBe("w");
    expect(it.next().value).toBe("y");
    expect(it.next().done).toBe(true);
  });

  it("should work with stepSize < 0", () => {
    const it = characterSequence(lowercaseAsciiLetterRange, "b", -1)[
      Symbol.iterator
    ]();
    expect(it.next().value).toBe("b");
    expect(it.next().value).toBe("a");
    expect(it.next().done).toBe(true);
  });

  it("should start at last letter if step size is negative and no value was provided", () => {
    const it = characterSequence(lowercaseAsciiLetterRange, "", -1)[
      Symbol.iterator
    ]();
    expect(it.next().value).toBe("z");
    expect(it.next().value).toBe("y");
    expect(it.next().value).toBe("x");
    expect(it.next().done).toBe(false);
  });
});

export {};
