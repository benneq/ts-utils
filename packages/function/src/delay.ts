import { Callback } from "./_types";

/**
 *
 * @param callback
 * @param ms
 * @param args
 * @returns
 */
export const delay = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>,
  ms: number,
  ...args: TArgs
): Callback<[]> => {
  const timeout = setTimeout(callback, ms, ...args);

  return () => clearTimeout(timeout);
};
