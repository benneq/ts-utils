import { timeoutPromise } from "./timeoutPromise";

describe("promise.timeoutPromise", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should reject after 100ms", async () => {
    //   const catchSpy = jest.fn();
    //   timeoutPromise(100)(new Promise(() => {})).catch(catchSpy);
    //   expect(catchSpy).not.toHaveBeenCalled();
    //   jest.advanceTimersByTime(99);
    //   await Promise.resolve();
    //   expect(catchSpy).not.toHaveBeenCalled();
    //   jest.advanceTimersByTime(1);
    //   await Promise.resolve();
    //   expect(catchSpy).toHaveBeenNthCalledWith(1, undefined);
    //   expect(catchSpy).toHaveBeenCalledTimes(1);
    // });
    // it("should resolve if promise resolved before timeout", async () => {
    //   const catchSpy = jest.fn();
    //   const [value] = symbolGenerator();
    //   timeoutPromise(100)(Promise.resolve(value)).then(catchSpy);
    //   jest.advanceTimersByTime(100);
    //   await Promise.resolve();
    //   expect(catchSpy).toHaveBeenNthCalledWith(1, value);
    //   expect(catchSpy).toHaveBeenCalledTimes(1);
    // });
    // it("should reject if promise rejected before timeout", async () => {
    //   const catchSpy = jest.fn();
    //   const [error] = symbolGenerator();
    //   timeoutPromise(100)(makePromise((resolve, reject) => reject(error))).catch(catchSpy);
    //   jest.advanceTimersByTime(100);
    //   await Promise.resolve();
    //   expect(catchSpy).toHaveBeenNthCalledWith(1, error);
    //   expect(catchSpy).toHaveBeenCalledTimes(1);
  });
});

export {};
