'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _es6Promise = require('es6-promise');

require('isomorphic-fetch');

(0, _es6Promise.polyfill)();

var apiURL = 'https://api.github.com';

var endPoints = {
  users: '/users/',
  orgs: '/orgs/',
  gists: '/gists',
  stargazers: '/repos/:owner/:repo/stargazers',
  repos: '/repos',
  branches: '/repos/:owner/:repo/branches'
};

var checkFetch = function checkFetch(userName, url) {
  if (!userName) {
    throw new Error('User name is mandatory');
  }

  if (!(userName.constructor === String)) {
    throw new Error('Username must be a string');
  }
  console.log(url);
  return fetch(url).then(function (data) {
    return data.json();
  });
};

exports['default'] = (function () {
  return {
    user: function user(userName) {
      return checkFetch(userName, '' + apiURL + '' + endPoints.users + '' + userName);
    },

    orgs: function orgs(userName) {
      return checkFetch(userName, '' + apiURL + '' + endPoints.users + '' + userName + '' + endPoints.orgs);
    },

    gists: function gists(userName) {
      return checkFetch(userName, '' + apiURL + '' + endPoints.users + '' + userName + '' + endPoints.gists);
    },

    stargazers: function stargazers(owner, repo) {
      return checkFetch(owner, ('' + apiURL + '' + endPoints.stargazers).replace(':owner', owner).replace(':repo', repo));
    },

    repos: function repos(owner) {
      return checkFetch(owner, '' + apiURL + '' + endPoints.users + '' + owner + '' + endPoints.repos);
    },

    branches: function branches(owner, repo) {
      return checkFetch(owner, ('' + apiURL + '' + endPoints.branches).replace(':owner', owner).replace(':repo', repo));
    }
  };
})();

module.exports = exports['default'];

