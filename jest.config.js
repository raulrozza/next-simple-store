const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    collectCoverageFrom: [
        'src/**/config/**/*.{ts,tsx}',
        'src/**/domain/**/*.{ts,tsx}',
        'src/**/infra/**/*.{ts,tsx}',
        'src/**/presentation/**/*.{ts,tsx}',
        'src/**/useCases/**/*.{ts,tsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/path/to/dir/',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>',
    }),
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
