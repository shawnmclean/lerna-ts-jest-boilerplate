const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: ["<rootDir>/packages/*/jest.config.js"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["<rootDir>/packages/*/src/**/*.{ts,tsx}"]
};
