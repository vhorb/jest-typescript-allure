module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: ['default', 'jest-allure'],
    setupFilesAfterEnv: ['jest-allure/dist/setup'],
    coverageThreshold: {
        global: {
            statements: 50,
            branches: 90,
            functions: 0,
            lines: 0,
        },
    }
}
