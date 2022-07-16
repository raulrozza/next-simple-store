const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>',
    }),
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
