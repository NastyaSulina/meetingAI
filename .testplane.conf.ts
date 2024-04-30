module.exports = {
    baseUrl: 'http://localhost:9000',
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    sets: {
        all: {
            files: ['e2e/**/*'],
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
