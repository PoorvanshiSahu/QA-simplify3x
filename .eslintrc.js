// {
//   "root": true,
//   "ignorePatterns": [
//     "projects/**/*"
//   ],
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "overrides": [
//     {
//       "files": [
//         "*.ts"
//       ],
//       "parserOptions": {
//         "project": [
//           "tsconfig.json"
//         ],
//         "createDefaultProgram": true,
//         "ecmaVersion": 12,
//         "sourceType": "module"
//       },
//       "extends": [
//         "plugin:@angular-eslint/recommended",
//         "plugin:@angular-eslint/template/process-inline-templates",
//         "plugin:@angular-eslint/recommended",
//         "plugin:@typescript-eslint/recommended",
//         "prettier"
//       ],
//       "rules": {
//         "@angular-eslint/directive-selector": [
//           "error",
//           {
//             "type": "attribute",
//             "prefix": "app",
//             "style": "camelCase"
//           }
//         ],
//         "@angular-eslint/component-selector": [
//           "error",
//           {
//             "type": "element",
//             "prefix": "app",
//             "style": "kebab-case"
//           }
//         ],
//         "prettier/prettier": "error"
//       },
//       "plugins": ["@typescript-eslint", "prettier"]
//     },
//     {
//       "files": [
//         "*.html"
//       ],
//       "extends": [
//         "plugin:@angular-eslint/template/recommended"
//       ],
//       "rules": {}
//     }
//   ]
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@angular-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}