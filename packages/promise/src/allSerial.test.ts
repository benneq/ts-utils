import { allSerial } from "./allSerial";

describe("promise.allSerial", () => {
  it("should resolve if no Promise was provided", async () => {
    const promise = allSerial([]);
    expect(promise).resolves.toEqual([]);
  });

  it("should resolve with all resolved values", async () => {
    const [resolveValue1, resolveValue2] = symbolGenerator();

    try {
      const result = await allSerial([
        new Promise((resolve) => resolve(resolveValue1)),
        new Promise((resolve) => resolve(resolveValue2)),
      ]);

      expect(result).toEqual([resolveValue1, resolveValue2]);
    } catch (err) {
      throw new Error();
    }
  });

  it("should reject with first error", async () => {
    const [resolveValue1, resolveValue2, rejectValue1, rejectValue2] =
      symbolGenerator();

    try {
      await allSerial([
        new Promise((resolve) => resolve(resolveValue1)),
        makePromise((_resolve, reject) => reject(rejectValue1)),
        new Promise((resolve) => resolve(resolveValue2)),
        makePromise((_resolve, reject) => reject(rejectValue2)),
      ]);

      throw new Error();
    } catch (err) {
      expect(err).toBe(rejectValue1);
    }
  });
});

export {};
