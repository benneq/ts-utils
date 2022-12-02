export type Counter = {
  value: number;
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
  reset: () => void;
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
 *   if(clickCountdown.value === 0) {
 *     console.log("0");
 *     clickCountdown.value = 5;
 *   }
 * };
 * ```
 *
 * @param initialValue - the initial value
 * @returns the Counter object
 */
export const counter = (initialValue = 0, value = initialValue): Counter => {
  return {
    get value() {
      return value;
    },
    set value(newValue: number) {
      value = newValue;
    },
    inc(delta = 1) {
      value = value + delta;
    },
    dec(delta = 1) {
      value = value - delta;
    },
    reset() {
      value = initialValue;
    },
  };
};
