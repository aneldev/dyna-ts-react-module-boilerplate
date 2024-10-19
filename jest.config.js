module.exports = {
  setupFilesAfterEnv: ["./tests/setup/testSetup.ts"],
  automock: false,
  collectCoverage: false,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  testRegex: "(src|tests)/.*\\.(test|spec)\\.(ts|tsx|js|jsx)$",
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|jpg|png|svg|gif)$": "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/@types",
    "!src/**/*.d.ts",
  ],
};
