import type { Config } from "jest";
import base from "../../jest.config.base";

const config: Config = {
  ...base,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default config;
