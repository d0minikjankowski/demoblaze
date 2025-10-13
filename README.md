# cypress portfolio based on demoblaze test website

## requirements:

1. **Node.js** (24.9.0)
2. **Cypress** (duh!):
    - Cypress package version: 15.3.0
    - Cypress binary version: 15.3.0
    - Electron version: 36.8.1
    - Bundled Node version: 22.18.0

3. **Mochawesome** 7.1.4
4. **Rimraf** `npm install rimraf -g`

## installation:

1. install Node.js https://nodejs.org/en/download
2. Clone the repository: `git clone https://github.com/d0minikjankowski/demoblaze`
3. install cypress `npm install cypress --save-dev`

## run Cypress
1. `npm cypress open` (UI mode)

or

2. `npx cypress run` (headless)

## helpful commands
1. `npm run prereport` - clear all report files
2. `npm run full:test` - clear all report files, run all tests, merge json report files and create an html report in: `mochawesome-report/`
3. `npx cypress run` - run all test files in a headless mode
4. `npm run report:report` - merge json files and create an html report in: `mochawesome-report/`