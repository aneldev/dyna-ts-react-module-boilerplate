"use strict";
module.exports = {
  root: true,
  env: {
    "browser": false,
    "es2021": true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "modules-newline",
    "eslint-plugin-react",
    "etc",
    "jest",
  ],
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  overrides: [
    {
      files: [
        "*.ts",
        "*.tsx",
      ],
      rules: {
        // Disable this due to eslint version problem https://pretagteam.com/question/react-was-used-before-it-was-defined-eslint-warning
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",

        "space-infix-ops": [
          "error",
          {
            "int32Hint": false,
          },
        ],

        "eol-last": [
          "error",
          "always",
        ],
        "modules-newline/import-declaration-newline": "error",
        "modules-newline/export-declaration-newline": "error",
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "semi",
              requireLast: true
            },
            singleline: {
              delimiter: "semi",
              requireLast: false
            }
          }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: [
              "PascalCase"
            ],
            custom: {
              regex: "^I[A-Z]",
              match: true
            }
          },
          {
            selector: "enum",
            format: [
              "PascalCase"
            ],
            custom: {
              regex: "^E[A-Z]",
              match: true,
            }
          }
        ],
        "@typescript-eslint/semi": [
          "error",
          "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        "brace-style": [
          "error",
          "stroustrup"
        ],
        "no-extra-boolean-cast": [
          "error"
        ],
        "comma-dangle": [
          "error",
          "always-multiline"
        ],
        "eqeqeq": [
          // https://eslint.org/docs/rules/eqeqeq
          "error",
          "smart"
        ],
        "id-blacklist": [
          "error",
          "any",
          "Number",
          "number",
          "String",
          "string",
          "Boolean",
          "boolean",
          "Undefined",
          "undefined"
        ],
        "id-match": "error",
        indent: [
          1,
          2,
          {
            ImportDeclaration: 1,
            SwitchCase: 1
          }
        ],
        "no-eval": "error",
        "no-mixed-operators": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-var": "error",
        semi: "error",
        curly: [
          "error",
          "multi-line"
        ],
        "object-curly-newline": [
          "error",
          {
            ImportDeclaration: {
              minProperties: 2,
              consistent: true,
              multiline: true
            },
            ObjectExpression: {
              multiline: true,
              minProperties: 2
            },
            ObjectPattern: {
              multiline: true,
              minProperties: 2
            },
            ExportDeclaration: {
              multiline: true,
              minProperties: 1
            }
          }
        ],
        "object-curly-spacing": [
          "error",
          "never"
        ],
        "object-property-newline": [
          "error",
          {
            allowAllPropertiesOnSameLine: false,
            allowMultiplePropertiesPerLine: false,
          }
        ],
        "keyword-spacing": [
          "error",
          {
            before: true,
            after: true,
          }
        ],
        "space-before-blocks": [
          "error",
          "always"
        ],
        "array-bracket-spacing": [
          "error",
          "never"
        ],
        "computed-property-spacing": [
          "error",
          "never"
        ],
        "spaced-comment": [
          "error",
          "always",
          {
            markers: [
              "/"
            ]
          }
        ],
        "switch-colon-spacing": [
          "error",
          {
            after: true,
            before: false
          }
        ],
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "newline-per-chained-call": "error",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-pascal-case": [
          "error",
          {}
        ],
        "react/jsx-first-prop-new-line": [
          "error",
          "multiline-multiprop"
        ],
        "react/jsx-max-props-per-line": [
          "error",
          {
            maximum: 1
          }
        ],
        "react/jsx-indent-props": [
          "error",
          2,
        ],
        "react/jsx-closing-bracket-location": "error",
        "react/self-closing-comp": "error",
        "etc/no-commented-out-code": "error",
        "capitalized-comments": [
          "error",
          "always",
        ],
      }
    },
    {
      "files": [
        "**/*.stories.*",
      ],
      "rules": {
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
