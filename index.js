'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _es6Promise = require('es6-promise');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

require('isomorphic-fetch');

(0, _es6Promise.polyfill)();

var apiURL = 'https://api.github.com';

var endPoints = {
	users: '/users/',
	orgs: '/orgs/',
	gists: '/gists',
	stargazers: '/repos/:owner/:repo/stargazers',
	repos: '/repos',
	branches: '/repos/:owner/:repo/branches',
	emojis: '/emojis',
	gitIgnore: '/gitignore/templates',
	members: '/orgs/:org/members',
	licenses: '/licenses'
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
		},

		emojis: function emojis() {
			return get('' + apiURL + '' + endPoints.emojis);
		},

		gitIgnore: function gitIgnore(lang) {
			lang = lang && lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
			return lang ? get('' + apiURL + '' + endPoints.gitIgnore + '' + lang) : get('' + apiURL + '' + endPoints.gitIgnore);
		},
		members: function members(org) {
			return checkFetch(org, ('' + apiURL + '' + endPoints.members).replace(':org', org));
		},
		licenses: function licenses(type) {
			var url = '';
			if (type) {
				url = '' + apiURL + '' + endPoints.licenses + '' + type;
			} else {
				url = '' + apiURL + '' + endPoints.licenses + '' + type;
			}
			return get(url);
		}
	};
})();

module.exports = exports['default'];

