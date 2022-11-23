export type ResolveFn<R> = (value: R | PromiseLike<R>) => void;

export type RejectFn = (reason?: unknown) => void;
