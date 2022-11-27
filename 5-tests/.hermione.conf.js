module.exports = {
    baseUrl: "",
    browsers: {
        chrome: {
            automationProtocol: "devtools",

            desiredCapabilities: {
                browserName: "chrome"
            },
            windowSize: {
                width: 1000,
                height: 1000
            }
        }
    },
    plugins: {
        "html-reporter/hermione": {
            path: "hermione-html-report"
        }
    }
}