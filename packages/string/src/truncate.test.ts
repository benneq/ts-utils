import { truncate } from "./truncate";

describe("string.truncate", () => {
  it("should return the truncated string", () => {
    expect(truncate(1)("123456789")).toBe("1");

    expect(truncate(-6)("123456789")).toBe("123");

    expect(truncate(5, "...")("123456789")).toBe("12345...");

    expect(truncate(1, "...")("123456789")).toBe("1...");

    expect(truncate(1, "...", " ")("123 45 6 789")).toBe("1...");
    expect(truncate(4, "...", " ")("123 45 6 789")).toBe("123...");
    expect(truncate(6, "...", " ")("123 45 6 789")).toBe("123 45...");
    expect(truncate(7, "...", " ")("123 45 6 789")).toBe("123 45...");
    expect(truncate(8, "...", " ")("123 45 6 789")).toBe("123 45 6...");
    expect(truncate(9, "...", " ")("123 45 6 789")).toBe("123 45 6...");

    expect(truncate(7, "...", "  ")("123  45  6789")).toBe("123...");
    expect(truncate(8, "...", "  ")("123  45  6789")).toBe("123  45...");
  });
});

export {};
