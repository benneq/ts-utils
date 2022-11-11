import { jest } from "@jest/globals";
import { delay } from "./delay";

describe("function.delay", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should call the callback after 100ms with the given argument", async () => {
    const callback = jest.fn();
    const [arg] = symbolGenerator();

    delay(callback, 100, arg);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(callback).toHaveBeenNthCalledWith(1, arg);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should cancel the timeout", async () => {
    const callback = jest.fn();
    const [arg] = symbolGenerator();

    const cancelFn = delay(callback, 100, arg);
    cancelFn();

    jest.runAllTimers();
    await Promise.resolve();
    expect(callback).not.toHaveBeenCalled();
  });
});

export {};
