'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _polyfill = require('es6-promise');

require('isomorphic-fetch');

'use strict';

_polyfill.polyfill();

var apiURL = 'https://api.github.com';

var endPoints = {
  users: '/users/',
  orgs: '/orgs/'
};

var checkFetch = function checkFetch(userName, url) {
  if (!userName) {
    throw new Error('User name is mandatory');
  }
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
    }
  };
})();

module.exports = exports['default'];

