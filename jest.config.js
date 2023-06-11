module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.scss$": "jest-scss-transform",
  },
  testEnvironment: "jsdom",
  testRegex: "/src/modules/.*\\.test?\\.ts$",
  moduleFileExtensions: ["ts", "js"],
};
