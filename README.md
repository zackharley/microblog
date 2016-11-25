# microblog {

A demo can be viewed [here](https://github.com/zackharley/microblog).

## Quickstart

To get started with this project, you must have Node v6.9.1 or higher installed on your computer.

You will also need the [Yarn](https://yarnpkg.com/) package manager installed:

```
$ npm i -g yarn
```


To install the dependencies for the project

```
$ yarn install
```


Once the dependencies are installed, you can build and start the Express server by running

```
$ npm start
```

This uses the files built into the `dist` folder.

## More help

To use a port besides the default `3000`, use an environment variable

```
$ export PORT=8080
```

To specify the environment you want to run the server in (the default is 'development', use an environment variable

```
$ export NODE_ENV=production
```

## The Build Process

When building, these are the following steps that occur
- The source code is linted using ESLint
- Whatever is currently in the `dist` folder is removed and the `dist` folder is recreated
- All of the server files are copied to `dist`
- The client-side files are transpiled and bundled using Babel and Webpack
- The SCSS code is transpiled and added to `dist`
- The server is executed

# }
