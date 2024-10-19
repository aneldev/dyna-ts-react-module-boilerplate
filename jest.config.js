module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  automock: false,
  collectCoverage: false,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  testRegex: "(src|tests)/.*\\.(test|spec)\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|jpg|png|svg|gif)$": "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/@types",
    "!src/**/*.d.ts",
  ],
};
