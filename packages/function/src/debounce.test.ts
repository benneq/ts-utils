import { jest } from "@jest/globals";
import { debounce } from "./debounce";

describe("function.debounce", () => {
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

    debounce(callback)(100, arg);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(99);
    await Promise.resolve();
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    await Promise.resolve();
    expect(callback).toHaveBeenNthCalledWith(1, arg);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should delay the callback if called multiple times", async () => {
    const callback = jest.fn();
    const [arg] = symbolGenerator();

    const now = Date.now();
    const debounceFn = debounce(callback);
    debounceFn(100, arg);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    debounceFn(100, arg);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    debounceFn(100, arg);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    debounceFn(100, arg);

    expect(Date.now() - now).toBe(150);
    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();
    await Promise.resolve();
    expect(callback).toHaveBeenNthCalledWith(1, arg);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

export {};
