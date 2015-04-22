'use strict';
import {
  polyfill
}
from 'es6-promise';
polyfill();

import 'isomorphic-fetch';

let apiURL = 'https://api.github.com';

let endPoints = {
  users: '/users/',
  orgs: '/orgs/'
};

let checkFetch = (userName, url) => {
  if (!userName) {
    throw new Error("User name is mandatory");
  }
  return fetch(url).then((data) => data.json());
};

export default (() => {
  return {
    user: (userName) => checkFetch(userName,
      `${apiURL}${endPoints.users}${userName}`),

    orgs: (userName) => checkFetch(userName,
      `${apiURL}${endPoints.users}${userName}${endPoints.orgs}`)
  };
}());
