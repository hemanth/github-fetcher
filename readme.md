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

## Fetch user info.

```js
githubFetcher.user('hemanth').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch organizations of an user.

```js
githubFetcher.orgs('hemanth').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch all the public gists of an user.

```js
githubFetcher.gists('hemanth').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch all the repos for a given user.

```js
githubFetcher.repos('hemanth').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch all the branches for a given repo and user.

```js
githubFetcher.branches('hemanth','paws-on-es6').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch all the stargazers for a given user and repo.

```js
githubFetcher.gists('hemanth','es7-features').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch all the emojis available to use on GitHub.

```js
githubFetcher.emojis().
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```

## Fetch all the gitignore templates or a specific template.

```js
githubFetcher.gitIgnore().
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );

/* OR a specific lang */

githubFetcher.gitIgnore('node').
  then( (data) => console.log(data) ).
	catch( (err) => console.log(err) );
```


## TODO
[issue#1](https://github.com/hemanth/github-fetcher/issues/1)

## License

MIT © [Hemanth.HM](http://h3manth.com)
