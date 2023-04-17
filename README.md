# Typescript Prep
## Overview
This repo illustrates fundamental and advanced concepts in Typescript.

It contains:

- Fundamental concepts such as:

- Advanced concepts such as:

## Steps to reproduce
```
# Prepare the environment
npm instal -g typescript

# Create folder structrure
mkdir typescriptprep && cd typescriptprep && mkdir ./src &&
mkdir -p ./src/codes && mkdir -p ./src/codes/concepts && mkdir -p ./src/codes/patterns && mkdir -p ./src/codes/problems &&
mkdir -p ./src/tests && mkdir -p ./src/tests/concepts && mkdir -p ./src/tests/patterns && mkdir -p ./src/tests/problems

# Initialize yarn
yarn init -y

# Initialize Git
git init

# Add typescript to project
yarn add typescript --dev 
NB: If not present globally, or want to use a local version that is different from global one

# Create a typescript configuration file for project
tsc --init

# Configure typescript
```JSON
{
  "compilerOptions": {
    "outDir": "dist", // where to put the compiled JS files
    "target": "ES2020", // which level of JS support to target
    "module": "CommonJS", // which system for the program AMD, UMD, System, CommonJS

    // Recommended: Compiler complains about expressions implicitly typed as 'any'
    "noImplicitAny": true, 
  },
  "include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip
}
```
```

# Add a build and dev command in package.json
...
"scripts": {
    "build": "tsc"
    "dev": "tsc --watch"
...

# Add eslint configuration to check syntax, find problems and enforce coding style.
  yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
npx eslint --init

# Configure ESLint
```
// .eslintrc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    // to enforce using type for object type definitions, can be type or interface 
    "@typescript-eslint/consistent-type-definitions": ["error", "type"], 

  },
  "env": {
    "browser": true,
    "es2021": true
  },
}
```
# Add a lint command in package.json
```
...
"scripts": {
    ...

    "lint": "eslint -p .eslintrc.json",
...
```
# Configure jest
```
yarn add jest ts-jest @types/jest --dev

npx ts-jest config:init
or mannually add jest.config.js file:
```
```JSON
export default {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```
```
# Add test command in package.json
```
...
"scripts": {
    ...
    "test": "jest"
  },
...


References:
- https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421 on 17th April, 2023
- https://blog.logrocket.com/linting-typescript-eslint-prettier/ on 17th April, 2023
- https://basarat.gitbook.io/typescript/intro-1/jest on 17th April, 2023
```