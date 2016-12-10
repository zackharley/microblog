# microblog {

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

Once the dependencies are installed, you have to replace the credentials for the MongoDB instance in `src/server/config/db.config.js`:
```
{
	host: 'http://example.com/db',
	username: 'root',
	password: 'password',
	database: 'admin'
}
```

You also have to add a Google client id to `src/public/config/auth.config.js` and a Google client secret to `src/server/config/auth.config.js` in place of `<replace>`.

You can build and start the Express server by running

```
$ npm start
```

This uses the files built into the `dist` folder.

## More help

To use a port besides the default `8000`, use an environment variable

```
$ export PORT=8080
```

## The Build Process

When building, these are the following steps that occur
- The source code is linted using TSLint
- Whatever is currently in the `dist` folder is removed and the `dist` folder is recreated
- All of the server files are copied to `dist`
- The client-side files are transpiled and bundled using TS Loader and Webpack
- The SCSS code is transpiled and added to `dist`
- The server is executed

# }
