import { TextEncoder } from "util";
import { subtle, randomUUID, getRandomValues } from "crypto";

// mocks the window.crypto object
Object.defineProperty(global, "crypto", {
  value: {
    getRandomValues: getRandomValues as any,
    randomUUID: randomUUID,
    subtle: subtle,
  },
});

// mocks TextEncoder
global.TextEncoder = TextEncoder;
