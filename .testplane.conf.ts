module.exports = {
    baseUrl: 'http://localhost:9000',
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,

    screenshotsDir: './e2e/screens',

    sets: {
        default: {
            files: ['e2e/landing.testplane.ts', 'e2e/summaryPage.testplane.ts'],
            browsers: ['chrome'],
        },
        snapshot: {
            files: ['layout.testplane.ts'],
            browsers: ['chrome'],
        },
    },
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
            },
        },
    },
    plugins: {
        'html-reporter/hermione': {
            path: 'testplane-report',
        },
    },
}
