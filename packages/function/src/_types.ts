/**
 *
 */
export type Callback<TArgs extends readonly unknown[] = []> = (
  ...args: TArgs
) => void;

/**
 * Provides a value
 */
export type Provider<T, TArgs extends unknown[] = []> = (...args: TArgs) => T;

/**
 *
 */
export type Mapper<T, S> = (value: T) => S;

/**
 *
 */
export type CancelCallback = () => void;
