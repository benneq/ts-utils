import { mod } from "@benneq/number";

/**
 * Removes characters from a String, and inserts new characters in their place.
 *
 * Works like {@link Array.prototype.splice}
 *
 * @example
 * Truncate to 3 characters
 * ```ts
 * const truncateTo3 = splice(3);
 * const s = truncateTo3("abcde");
 * console.log(s); // 'abc'
 * ```
 *
 * @example
 * Delete the second character
 * ```ts
 * const delete2ndChar = splice(1, 1);
 * const s = delete2ndChar("abc");
 * console.log(s); // 'ac'
 * ```
 *
 * @example
 * Replace last character with asterisk (`"*"`)
 * ```ts
 * const maskLastChar = splice(-1, 1, '*');
 * const s = maskLastChar("abc");
 * console.log(s); // 'ab*'
 * ```
 *
 * @return the spliced String
 */
export const splice =
  (start = 0, deleteCount?: number, replacement = "") =>
  (str: string, length = str.length): string => {
    // normalize start index to align with Array.prototype.splice behavior
    start = start < -length ? 0 : start < 0 ? mod(start, length) : start;

    return (
      str.slice(0, start) +
      replacement +
      // normalize deleteCount to align with Array.prototype.splice behavior
      str.slice(start + Math.max(deleteCount ?? length - start, 0))
    );
  };
