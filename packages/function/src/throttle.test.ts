import { jest } from "@jest/globals";
import { throttle } from "./throttle";

describe("function.throttle", () => {
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

    throttle(callback)(100, arg);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(99);
    await Promise.resolve();
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    await Promise.resolve();
    expect(callback).toHaveBeenNthCalledWith(1, arg);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should keep the first delay if called multiple times", async () => {
    const callback = jest.fn();
    const [arg] = symbolGenerator();

    const now = Date.now();
    const throttleFn = throttle(callback);
    throttleFn(100, arg);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    throttleFn(100, arg);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(Date.now() - now).toBe(100);
    expect(callback).toHaveBeenNthCalledWith(1, arg);

    throttleFn(100, arg);

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    expect(Date.now() - now).toBe(200);
    expect(callback).toHaveBeenNthCalledWith(2, arg);

    jest.runAllTimers();
    await Promise.resolve();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

export {};
