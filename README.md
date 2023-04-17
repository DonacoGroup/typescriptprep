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
mkdir typescriptprep && cd typescriptprep

# Initialize yarn
yarn init -y

# Initialize Git
git init
# Create a typescript configuration file for project
tsc --init

# Add a build command in package.json
...
"scripts": {
    "build": "tsc"
...

# Add eslint configuration to check syntax, find problems and enforce coding style.
  yarn init @eslint/config
# Configure jest
yarn add jest ts-jest @types/jest --save-dev
npx ts-jest config:init
# Add test command in package.json
...
"scripts": {
    ...
    "test": "jest"
  },
...

References:
- https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421 on 17th April, 2023
```