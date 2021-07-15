const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
);

module.exports = {
  extends: ["react-app", "prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".tsx"] }],
    "react/prefer-stateless-function": [1],
    "react/jsx-props-no-spreading": "off",
    "react/sort-comp": [
      2,
      {
        order: [
          "props",
          "state",
          "type-annotation",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],
    "prettier/prettier": ["error", prettierOptions],
    "no-restricted-syntax": 0,
    "consistent-return": 0,
    "import/no-mutable-exports": 0,
    "react/jsx-one-expression-per-line": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-console": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-multiple-empty-lines": [2, { max: 1 }],
    "no-param-reassign": ["error", { props: false }],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-underscore-dangle": ["error", { allow: ["__isRetryRequest"] }],
    "no-nested-ternary": "off",
    "no-undef": 0,
    "no-restricted-globals": 0,
    "react/destructuring-assignment": "off",
    "import/no-default-export": 2,
    "import/order": [
      "error",
      {
        groups: ["external", "internal"],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "react/jsx-curly-newline": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/alt-text": 0,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: { "prettier/prettier": ["warn", prettierOptions] },
    },
  ],
};
