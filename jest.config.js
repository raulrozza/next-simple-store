const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
    moduleNameMapper: {
        '^@/assets/(.*)$': '<rootDir>/assets/$1',
        '^@/config/(.*)$': '<rootDir>/config/$1',
        '^@/shared/(.*)$': '<rootDir>/shared/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
