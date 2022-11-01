/**
 * A Generator that is done immediatly and never yields
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const done: Generator<never, void, unknown> =
  (function* done(): Generator<never, void, unknown> {})();
