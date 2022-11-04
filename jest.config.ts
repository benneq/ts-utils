import type { Config } from "jest";
import base from "./jest.config.base";

const config: Config = {
  ...base,
  projects: ["<rootDir>/packages/*"],
  coverageReporters: ["html"],
  coverageDirectory: "<rootDir>/pages/coverage",
};

export default config;
