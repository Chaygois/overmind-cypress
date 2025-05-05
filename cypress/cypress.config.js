// cypress.config.js
const { defineConfig } = require('cypress')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor').default
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 1000, // Aumenta o timeout de carregamento da página para 20 segundos
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      // registra o plugin de BDD
      on('file:preprocessor', createEsbuildPlugin(config))
      preprocessor.addCucumberPreprocessorPlugin(on, config)
      return config
    },
  },
})
