module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2019,
        sourceType: 'module',
        tsconfigRootDir: 'build/',
        project: 'tsconfig.tests.json',
        extraFileExtensions: ['vue']
    },
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin-vue/recommended',
        'plugin:@typescript-eslint/eslint-plugin/eslint-recommended',
        'plugin:@typescript-eslint/eslint-plugin/recommended',
        'plugin:@typescript-eslint/eslint-plugin/recommended-requiring-type-checking',
        'plugin:eslint-plugin-prettier/recommended',
        'eslint-config-prettier',
        'eslint-config-prettier/@typescript-eslint',
        'eslint-config-prettier/vue'
    ],
    rules: {
        'prettier/prettier': ['error', JSON.parse(require('fs').readFileSync('build/prettierrc.json'))],
        '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
        '@typescript-eslint/no-empty-interface': 'off'
    }
};
