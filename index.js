'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _polyfill = require('es6-promise');

var _assert = require('assert');

var _assert2 = _interopRequireWildcard(_assert);

require('isomorphic-fetch');

'use strict';

_polyfill.polyfill();

var apiURL = 'https://api.github.com';

var endPoints = {
	users: '/users/',
	orgs: '/orgs/',
	gists: '/gists',
	stargazers: '/repos/:owner/:repo/stargazers',
	repos: '/repos',
	branches: '/repos/:owner/:repo/branches',
	emojis: '/emojis'
};

var get = function get(url) {
	return fetch(url).then(function (data) {
		return data.json();
	});
};

var assertType = function assertType(input, type, msg) {
	_assert2['default'].equal(typeof input, type, msg);
};

var checkFetch = function checkFetch(userName, url) {
	assertType(userName, 'string', 'User name is mandatory and must be a string');
	return get(url);
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

