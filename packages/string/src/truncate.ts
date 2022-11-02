import { splice } from "./splice";

/**
 * Truncates a string to a maximum length.
 *
 * If suffix is provided, its length is idependent from maxLength
 *
 * If separator is provided, it will look for the closest separator to truncate to
 *
 * @example
 * truncate("12345", 3) => "123"
 * truncate("12345", 3, '...') => "123..."
 * truncate("12 34 56", 1, '...', ' ') => "1..."
 * truncate("12 34 56", 7, '...', ' ') => "12 34..."
 *
 * @returns the truncated String
 */
export const truncate = (
  maxLength: number,
  suffix = "",
  separator = ""
): ((str: string) => string) => {
  return (str) => {
    const lastSeparatorIndex = str
      .slice(0, maxLength + 1)
      .lastIndexOf(separator);

    const startIndex =
      separator && lastSeparatorIndex > 0 ? lastSeparatorIndex : maxLength;

    return splice(startIndex, str.length, suffix)(str);
  };
};
