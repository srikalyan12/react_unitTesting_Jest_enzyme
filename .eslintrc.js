module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
     ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
