import { Callback } from "./_types";

/**
 * Empty Function
 *
 * @example
 * This does nothing
 * ```ts
 * noop();
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: Callback<unknown[]> = () => {};
