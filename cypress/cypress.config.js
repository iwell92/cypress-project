const { defineConfig} = require("cypress");

module.exports = defineConfig({
    projectId: 'b9bych',  //npqmj6
    e2e: {
        setupNodeEvents(on, config) {

        },
    },
    reporter: "mochawesome",
    reporterOptions: {
        reporterDir: "cypress/report/mochawesome-report",
        overwrite: true,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    },
    e2e: {
        baseUrl:'https://alura-fotos.herokuapp.com'
    }
});
