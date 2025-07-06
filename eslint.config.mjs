// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import prettier from "eslint-config-prettier/flat"
import pluginVueA11y from "eslint-plugin-vuejs-accessibility"

// This workaround is taken from https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/issues/1269
const a11yConfig = pluginVueA11y.configs["flat/recommended"]

a11yConfig.forEach((x) => {
  // there seems to be problem with the globals.
  // We shouldn't need these anyways because we use typescript
  // to define global variables.
  // @ts-expect-error -- deleting is intentional here.
  delete x.languageOptions.globals
})

export default withNuxt(prettier, ...a11yConfig)
