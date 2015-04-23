'use strict';
import {polyfill} from 'es6-promise';
polyfill();

import 'isomorphic-fetch';

let apiURL = 'https://api.github.com';

let endPoints = {
	users: '/users/',
	orgs: '/orgs/',
	gists: '/gists'
};

let checkFetch = (userName, url) => {
	if (!userName) {
		throw new Error("User name is mandatory");
	}
    
    if (! (userName.constructor === String) ) {
        throw new Error("Username must be a string");
    }
    
	return fetch(url).then((data) => data.json());
};

export default (() => {
	return {
		user: (userName) => checkFetch(userName,
			`${apiURL}${endPoints.users}${userName}`),

		orgs: (userName) => checkFetch(userName,
			`${apiURL}${endPoints.users}${userName}${endPoints.orgs}`),

		gists: (userName) => checkFetch(userName,
		    `${apiURL}${endPoints.users}${userName}${endPoints.gists}`)
	};
}());
