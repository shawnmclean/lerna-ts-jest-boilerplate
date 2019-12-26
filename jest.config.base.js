module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
  globals: {
    "ts-jest": {}
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  verbose: true
};
