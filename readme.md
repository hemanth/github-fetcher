# github-fetcher [![Build Status](https://travis-ci.org/hemanth/github-fetcher.svg?branch=master)](https://travis-ci.org/hemanth/github-fetcher)

> Promised based isomorphic Github API.


## Install

```
$ npm install --save github-fetcher
```


## Usage

```js
var githubFetcher = require('github-fetcher');
```

## API

# Get user

```js
githubFetcher.user('hemanth').
  then( (data) => console.log(data)).
	catch( (err) => console.log(err));
```

## TODO
[issue#1](https://github.com/hemanth/github-fetcher/issues/1)

## License

MIT © [Hemanth.HM](http://h3manth.com)
