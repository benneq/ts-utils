import { Provider, isFunction } from "@benneq/function";

export type ValueOrProvider<T, TArgs extends unknown[] = []> =
  | T
  | Provider<T, TArgs>;

/**
 * Resolves a value that was provided via {@link ValueOrProvider}
 *
 * Can be called with optional `args` which will be used as arguments when calling the Provider Function.
 *
 * @example
 * Create a Function that accepts a `value` that can be either lazy and eager inizialized
 * ```ts
 * function fn(value: ValueOrProvider<string>) {
 *   // ... some code that may return early from the Function ...
 *
 *   // resolve the value when it is actually needed
 *   const actualValue = valueOrProviderResult(value);
 *   console.log(typeof actualValue); // 'string'
 * }
 * ```
 *
 * Call the Function with an eager initialized value
 * ```ts
 * fn(1);
 * ```
 *
 * Call the Function with a lazy initialized value
 * ```ts
 * function someExpensiveOperation() { /* ... *\/ }
 *
 * fn(someExpensiveOperation);
 * ```
 *
 * @example
 * Create a Function that accepts a `value` that can be either static or dynamic
 * ```ts
 * function add(numbers: number[], value: ValueOrProvider<number, [number]>) {
 *   return numbers.map(n => n + valueOrProviderResult(value, e));
 * }
 * ```
 *
 * Call the Function with a static value
 * ```ts
 * const a = add([1,2,3], 1);
 * console.log(a); // [2,3,4]
 * ```
 *
 * Call the Function with a dynamic value
 * ```ts
 * const a = add([1,2,3], n => 2+n);
 * console.log(a); // [4,6,8]
 * ```
 *
 * @returns the result of the Function if `value` is a Function, otherwise returns `value` itself
 */
export const valueOrProviderResult = <T, TArgs extends unknown[] = []>(
  value: ValueOrProvider<T, TArgs>,
  ...args: TArgs
): T => {
  if (isFunction(value)) {
    return value(...args);
  } else {
    return value;
  }
};

valueOrProviderResult("foo", "");
