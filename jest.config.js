module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
	preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
	coveragePathIgnorePatterns: [
		"<rootDir>/src/presentation/protocols/index.ts",
		"<rootDir>/src/presentation/controllers/signup/signup-protocols.ts",
		"<rootDir>/src/data/usecases/add-account/db-add-account-protocols.ts",
		"<rootDir>/src/main/server.ts",
    "<rootDir>/src/main/config/env.ts"
	],
}
