/**
 * A Predicate is a boolean-valued function
 */
export type Predicate<TArgs extends unknown[] = []> = (
  ...args: TArgs
) => boolean;
