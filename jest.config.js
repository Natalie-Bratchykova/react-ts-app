module.exports = {
    testEnvironment: 'jsdom',
    globalSetup: './tests/global-setup.js', // Optional global setup file
    testMatch: ['**/__tests__/**/*.test.ts?(x)'], // Adjust this based on your test file naming conventions
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./tests/setupTests.ts'], // Optional setup file for Jest
    moduleNameMapper: {
      // Additional module name mappings if needed
    },
  };
  