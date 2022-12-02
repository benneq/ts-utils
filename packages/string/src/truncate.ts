import { splice } from "./splice";

/**
 * Truncates a string to a maximum length.
 *
 * `suffix` length does not influence `maxLength`.
 *
 * If `separator` is provided, it will look for the closest `separator` to truncate to
 *
 * @example
 * Truncate to 3 characters
 * ```ts
 * const truncateTo3 = truncate(3);
 * const s = truncateTo3("12345");
 * console.log(s); // '123'
 * ```
 *
 * @example
 * Truncate to 3 characters, and add `"..."` suffix
 * ```ts
 * const truncateTo3WithSuffix = truncate(3, '...');
 * const s = truncateTo3WithSuffix("12345");
 * console.log(s); // '123...'
 * ```
 *
 * @example
 * Truncate to the closest space (`" "`) up to 9 characters
 * ```ts
 * const truncateTo9AtSpace = truncate(9, "", " ");
 * const s = truncateTo9AtSpace("123 45 6 789");
 * console.log(s); // '123 45 6'
 * ```
 *
 * @returns the truncated String
 */
export const truncate =
  (maxLength: number, suffix = "", separator = "") =>
  (str: string, length = str.length): string => {
    if (length < maxLength) {
      return str;
    }

    const lastSeparatorIndex = str
      .slice(0, maxLength + 1)
      .lastIndexOf(separator);

    const startIndex =
      separator && lastSeparatorIndex > 0 ? lastSeparatorIndex : maxLength;

    return splice(startIndex, length, suffix)(str);
  };
