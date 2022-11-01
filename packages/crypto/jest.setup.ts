import crypto from "crypto";

// mocks the window.crypto object
Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => {
      return crypto.randomUUID();
    },
  },
});
