# Base React App

Base web app structure using React, Redux, React Router and Webpack.
It also establishes a pattern for using [BEM](http://getbem.com/) with React.

To use this as a starting point for your React project:

* Clone this repository
* `rm -rf .git`
* `git init`

## Build and run

The following instructions are for macOS.

### Prerequisites

* [Homebrew](http://brew.sh/)

### Initial setup

```
brew install nvm
nvm install node  # Install the latest Node.js version
brew install yarn
```

**NOTE:** If Node.js is already installed, you will need to run `nvm use node` when opening a new shell for this
project. Alternatively, to use the latest Node.js version by default: `nvm alias default node`.

### Install/sync dependencies

```
yarn
```

### Build and run in dev mode

```
npm start
```

Point your browser to http://localhost:3000

### Create a deployable build

```
npm run build
```

### Run tests

```
npm run test
```

To produce a test coverage report:

```
npm run test:coverage
```

To continuously run tests as the underlying code changes:

```
npm run test:tdd
```

### Development tools

It is highly recommended to use these browser extensions during development:

* React Developer Tools ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
| [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/))
* Redux Tools ([Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
| [Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/))
