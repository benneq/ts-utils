import { delay } from "./delay";
import { Callback, CancelCallback } from "./_types";

export const debounce = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>
): ((ms: number, ...args: TArgs) => CancelCallback) => {
  let cancel: CancelCallback;

  return (ms, ...args) => {
    cancel && cancel();
    cancel = delay(callback, ms, ...args);
    return cancel;
  };
};
