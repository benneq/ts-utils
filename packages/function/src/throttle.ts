import { delay } from "./delay";
import { Callback, CancelCallback } from "./_types";

export const throttle = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>
): ((ms: number, ...args: TArgs) => CancelCallback) => {
  let cancel: CancelCallback | undefined;

  return (ms, ...args) => {
    if (cancel) {
      return cancel;
    }

    cancel = delay(() => {
      callback(...args);
      cancel = undefined;
    }, ms);

    return cancel;
  };
};
