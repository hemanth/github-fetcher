'use strict';
import {
	polyfill
}
from 'es6-promise';
polyfill();

import assert from 'assert'
import 'isomorphic-fetch';

let apiURL = 'https://api.github.com';

let endPoints = {
	users: '/users/',
	orgs: '/orgs/',
	gists: '/gists',
	stargazers: '/repos/:owner/:repo/stargazers',
	repos: '/repos',
	branches: '/repos/:owner/:repo/branches',
	emojis: '/emojis',
	gitIgnore: '/gitignore/templates',
	members: '/orgs/:org/members'
};

let get = (url) => {
	return fetch(url).then((data) => data.json());
};

let assertType = (input, type, msg) => {
	assert.equal(typeof input, type, msg);
};

let checkFetch = (userName, url) => {
	assertType(userName, 'string', 'User name is mandatory and must be a string');
	return get(url);
};

export default (() => {
	return {
		user: (userName) => checkFetch(userName,
			`${apiURL}${endPoints.users}${userName}`),

		orgs: (userName) => checkFetch(userName,
			`${apiURL}${endPoints.users}${userName}${endPoints.orgs}`),

		gists: (userName) => checkFetch(userName,
			`${apiURL}${endPoints.users}${userName}${endPoints.gists}`),

		stargazers: (owner, repo) => checkFetch(owner,
			`${apiURL}${endPoints.stargazers}`
			.replace(':owner', owner)
			.replace(':repo', repo)),

		repos: (owner) => checkFetch(owner,
			`${apiURL}${endPoints.users}${owner}${endPoints.repos}`),

		branches: (owner, repo) => checkFetch(owner,
			`${apiURL}${endPoints.branches}`
			.replace(':owner', owner)
			.replace(':repo', repo)),

		emojis: () => get(`${apiURL}${endPoints.emojis}`),

		gitIgnore: (lang) => {
			lang = lang && lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
			return lang ? get(`${apiURL}${endPoints.gitIgnore}${lang}`) :
				get(`${apiURL}${endPoints.gitIgnore}`);
		},
		members: (org) => checkFetch(org,
			`${apiURL}${endPoints.members}`
			.replace(':org',org))
	};
}());
