import { empty } from "@benneq/function";

/**
 * A Promise that never fulfills
 *
 * @remark
 * Caution when using with `await`, because it will block at the `await` forever.
 * ```ts
 * await never;
 * // this line will never be executed
 * ```
 *
 * @example
 * ```ts
 * never
 *   .then(() => console.log("then"))    // will never be called
 *   .catch(() => console.log("catch")); // will never be called
 * ```
 *
 */
export const never: Promise<unknown> = new Promise(empty);
