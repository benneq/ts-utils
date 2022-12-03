export type Counter = {
  get: () => number;
  set: (value: number) => void;
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
};

/**
 * Creates a {@link Counter} object with an optional `initialValue`, defaults to `0`.
 *
 * @example
 * Create a countdown
 * ```ts
 * const clickCountdown = counter(10);
 *
 * const handleClickEvent = () => {
 *   clickCountdown.dec();
 *
 *   if(isZero(clickCountdown.get())) {
 *     console.log("0");
 *     clickCountdown.set(5);
 *   }
 * };
 * ```
 *
 * @param initialValue - the initial value
 * @returns the Counter object
 */
export const counter = (initialValue = 0): Counter => {
  return {
    get() {
      return initialValue;
    },
    set(newValue) {
      initialValue = newValue;
    },
    inc(delta = 1) {
      initialValue = initialValue + delta;
    },
    dec(delta = 1) {
      initialValue = initialValue - delta;
    },
  };
};
