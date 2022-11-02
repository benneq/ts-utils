/**
 * A Generator that is done immediatly and never yields
 */

export const done: Generator<never, void, unknown> = // eslint-disable-next-line @typescript-eslint/no-empty-function
  (function* done(): Generator<never, void, unknown> {})();
