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

        "no-console": [
          "warn",
          {
            allow: [
              "log",
              "warn",
              "error",
              "time",
              "timeEnd",
              // But not "debug"
            ],
          },
        ],

        "no-case-declarations": "off",

        "@typescript-eslint/no-non-null-assertion": "off",

        "space-infix-ops": [
          "warn",
          {
            "int32Hint": false,
          },
        ],

        "eol-last": [
          "warn",
          "always",
        ],
        "@typescript-eslint/member-delimiter-style": [
          "warn",
          {
            multiline: {
              delimiter: "semi",
              requireLast: true,
            },
            singleline: {
              delimiter: "semi",
              requireLast: false,
            }
          }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "interface",
            format: [
            ],
            custom: {
              regex: "^I[A-Z]",
              match: true,
            }
          },
          {
            selector: "enum",
            format: [
              "PascalCase",
              "UPPER_CASE",
            ],
            custom: {
              regex: "^E[A-Z]",
              match: true,
            }
          }
        ],
        "@typescript-eslint/semi": [
          "warn",
          "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/no-unused-expressions": "off",
        "brace-style": [
          "warn",
          "stroustrup"
        ],
        "no-extra-boolean-cast": [
          "warn"
        ],
        "comma-dangle": [
          "warn",
          "always-multiline"
        ],
        "eqeqeq": [
          // https://eslint.org/docs/rules/eqeqeq
          "warn",
          "smart"
        ],
        "id-blacklist": [
          "warn",
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
        "id-match": "warn",
        indent: [
          1,
          2,
          {
            ImportDeclaration: 1,
            SwitchCase: 1
          }
        ],
        "no-eval": "warn",
        "no-mixed-operators": "warn",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "warn",
        "no-var": "warn",
        semi: "warn",
        curly: [
          "warn",
          "multi-line"
        ],
        "object-curly-newline": [
          "warn",
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
          "warn",
          "never"
        ],
        "object-property-newline": [
          "warn",
          {
            allowAllPropertiesOnSameLine: false,
            allowMultiplePropertiesPerLine: false,
          }
        ],
        "keyword-spacing": [
          "warn",
          {
            before: true,
            after: true,
          }
        ],
        "space-before-blocks": [
          "warn",
          "always"
        ],
        "array-bracket-spacing": [
          "warn",
          "never"
        ],
        "computed-property-spacing": [
          "warn",
          "never"
        ],
        "spaced-comment": [
          "warn",
          "always",
          {
            markers: [
              "/"
            ]
          }
        ],
        "switch-colon-spacing": [
          "warn",
          {
            after: true,
            before: false
          }
        ],
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "newline-per-chained-call": "warn",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-pascal-case": [
          "warn",
          {}
        ],
        "react/jsx-first-prop-new-line": [
          "warn",
          "multiline-multiprop"
        ],
        "react/jsx-max-props-per-line": [
          "warn",
          {
            maximum: 3
          }
        ],
        "react/jsx-indent-props": [
          "warn",
          2,
        ],
        "react/jsx-closing-bracket-location": "warn",
        "react/self-closing-comp": "warn",
        "etc/no-commented-out-code": "warn",
        "capitalized-comments": [
          "warn",
          "always",
        ],
        "jest/no-conditional-expect": "off",
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
