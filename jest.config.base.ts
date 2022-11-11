import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  setupFilesAfterEnv: ["../../jest.helper.ts"],
};

export default config;
