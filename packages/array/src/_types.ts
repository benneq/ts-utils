/**
 * An Index allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @example
 * ```ts
 * ['a','b','c'].at(-1) => 'c'
 * ```
 */
export type RelativeIndex = number & { __brand?: never };

/**
 * Describes an empty ArrayLike value.
 *
 * @example
 * ```ts
 * { length: 0 }
 * ```
 */
export type EmptyArrayLike = ArrayLike<unknown> & { length: 0 };
