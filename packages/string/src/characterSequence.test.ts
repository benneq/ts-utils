import { characterSequence } from "./characterSequence";
import { lowercaseAsciiLetterRange } from "./lowercaseAsciiLetterRange";

describe("string.characterSequence", () => {
  it("should start with range start if no value was provided", () => {
    const generator = characterSequence(lowercaseAsciiLetterRange);
    expect(generator.next().value).toBe("a");
    expect(generator.next().value).toBe("b");
    expect(generator.next().value).toBe("c");
    expect(generator.next().done).toBe(false);
  });

  it("should generate the same letter if stepSize is 0", () => {
    const generator = characterSequence(lowercaseAsciiLetterRange, "", 0);
    expect(generator.next().done).toBe(true);
  });

  it("should stop after reaching the end of the range", () => {
    const generator = characterSequence(lowercaseAsciiLetterRange, "xx");
    expect(generator.next().value).toBe("x");
    expect(generator.next().value).toBe("y");
    expect(generator.next().value).toBe("z");
    expect(generator.next().done).toBe(true);
  });

  it("should work with stepSize > 1", () => {
    const generator = characterSequence(lowercaseAsciiLetterRange, "w", 2);
    expect(generator.next().value).toBe("w");
    expect(generator.next().value).toBe("y");
    expect(generator.next().done).toBe(true);
  });

  it("should work with stepSize < 0", () => {
    const generator = characterSequence(lowercaseAsciiLetterRange, "b", -1);
    expect(generator.next().value).toBe("b");
    expect(generator.next().value).toBe("a");
    expect(generator.next().done).toBe(true);
  });

  it("should start at last letter if step size is negative and no value was provided", () => {
    const generator = characterSequence(lowercaseAsciiLetterRange, "", -1);
    expect(generator.next().value).toBe("z");
    expect(generator.next().value).toBe("y");
    expect(generator.next().value).toBe("x");
    expect(generator.next().done).toBe(false);
  });
});

export {};
