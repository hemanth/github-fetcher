'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ = require('./');

var _2 = _interopRequireDefault(_);

it('should return the user info', function () {
  _2['default'].user('hemanth').then(function (data) {
    return _assert2['default'].equal(data.login, 'hemanth');
  });
});

it('should return the orgs of the user', function () {
  _2['default'].orgs('hemanth').then(function (data) {
    return _assert2['default'].equal(data.login, 'hemanth');
  });
});

it('should return the gists of the user', function () {
  _2['default'].gists('hemanth').then(function (data) {
    return _assert2['default'].equal(data[0]['public'], true);
  });
});

it('should return all the stargazers.', function () {
  _2['default'].stargazers('hemanth', 'es7-features').then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

it('should return all the repos for the given user.', function () {
  _2['default'].repos('hemanth').then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

it('should return all the branches of a repo for the given user.', function () {
  _2['default'].repos('hemanth', 'es7-features').then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

it('should return all the emojis available to use on GitHub.', function () {
  _2['default'].emojis().then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

it('should return all the gitignore templates.', function () {
  _2['default'].gitIgnore().then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

it('should return node\'s gitignore template.', function () {
  _2['default'].gitIgnore('node').then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

it('should return all the members of the given org.', function () {
  _2['default'].members('yeoman').then(function (data) {
    return _assert2['default'].equal(data.length > 0, true);
  });
});

