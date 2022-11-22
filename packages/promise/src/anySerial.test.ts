import { anySerial } from "./anySerial";

describe("promise.anySerial", () => {
  it("should resolve to undefined if no Promise was provided", async () => {
    const promise = anySerial([]);
    expect(promise).resolves.toBeUndefined();
  });

  it("should resolve to defaultValue if no Promise was provided", async () => {
    const [defaultValue] = symbolGenerator();

    const promise = anySerial([], defaultValue);
    expect(promise).resolves.toBe(defaultValue);
  });

  it("should resolve to the first resolving Promise", async () => {
    const [resolveValue] = symbolGenerator();

    try {
      const result = await anySerial([
        new Promise((resolve) => resolve(resolveValue)),
        new Promise((resolve) => resolve(Symbol())),
        makePromise((_resolve, reject) => reject(Symbol())),
      ]);

      expect(result).toBe(resolveValue);
    } catch (err) {
      throw new Error();
    }
  });

  it("should reject an AggregateError", async () => {
    const [rejectValue1, rejectValue2] = symbolGenerator();

    try {
      await anySerial([
        new Promise((_resolve, reject) => reject(rejectValue1)),
        new Promise((_resolve, reject) => reject(rejectValue2)),
      ]);

      throw new Error();
    } catch (err) {
      expect(err instanceof AggregateError).toBe(true);
      expect(err.errors).toEqual([rejectValue1, rejectValue2]);
    }
  });
});

export {};
