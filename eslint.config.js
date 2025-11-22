import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    ignores: [
      'src/components/ui/*',
      'src/components/ui/**/*'
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        // Common browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        Audio: 'readonly',
        fetch: 'readonly'
      }
    },
    rules: {
      "vue/comment-directive": "off"
    }
  }
]
