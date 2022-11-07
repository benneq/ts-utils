type Counter = {
    inc: (delta?: number) => void,
    dec: (delta?: number) => void,
    get value(): number,
    set value(newValue: number),
    reset: () => void,
}

/**
 * Creates a counter object with an `initialValue`.
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
 * @param initialValue the initial value
 *
 * @returns the Counter object
 */
export const counter = (initialValue = 0): Counter => {
  let value = initialValue;

  return {
    inc(delta = 1) {
      value = value + delta;
    },
    dec(delta = 1) {
      value = value - delta;
    },
    get value() {
      return value;
    },
    set value(newValue: number) {
      value = newValue;
    },
    reset() {
      value = initialValue;
    },
  };
};
