'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _assert = require('assert');

var _assert2 = _interopRequireWildcard(_assert);

var _githubFetcher = require('./');

var _githubFetcher2 = _interopRequireWildcard(_githubFetcher);

it('should return the user info', function () {
      _githubFetcher2['default'].user('hemanth').then(function (data) {
            return _assert2['default'].equal(data.login, 'hemanth');
      });
});

it('should return the orgs of the user', function () {
      _githubFetcher2['default'].orgs('hemanth').then(function (data) {
            return _assert2['default'].equal(data.login, 'hemanth');
      });
});

it('should return the gist of the user', function () {
      _githubFetcher2['default'].gists('hemanth').then(function (data) {
            return console.log(data);
      });
});

