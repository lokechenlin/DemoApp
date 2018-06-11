# Setup App:
Follow https://facebook.github.io/react-native/docs/getting-started.html
    mkdir DemoApp
    react-native init DemoApp
    cd DemoApp
    react-native run-ios

# Setup VSCode
    Adding .gitignore
    Adding README.md
    Changing .vscode/settings.json

# Setup ESLint & Decide flowType or TypeScript
    - FlowType is more relevant to "JavaScript with type annotations."
    - Since React and FlowType from Facebook, theoritically work better with React.
    - However, TypeScript is more popular.
    yarn add --dev eslint
    yarn add --dev babel-core
    yarn add --dev babel-eslint
    yarn add --dev babel-polyfill
    yarn add --dev babel-register
    yarn add --dev babel-preset-stage-3
    yarn add --dev eslint-plugin-babel
    yarn add --dev eslint-plugin-react
    yarn add --dev eslint-plugin-import
    yarn add --dev eslint-plugin-jsx-a11y
    yarn add --dev eslint-plugin-react-native
    yarn add --dev eslint-plugin-json
    yarn add --dev eslint-config-airbnb
    yarn add --dev eslint-plugin-flowtype
    yarn add --dev flow-bin
    yarn add prop-types
    Copying the .eslintrc

# Setup Navigation:
Follow https://reactnavigation.org/docs/en/getting-started.html
    yarn add react-navigation

    Problem: this.props.navigation facing eslint propsType validation issue
    Solution: Add the eslintrc
        "react/prop-types": [1, { "ignore": "navigation", "customValidators": "" }]


