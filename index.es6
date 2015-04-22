'use strict';
import {
  polyfill
}
from 'es6-promise';
polyfill();

import 'isomorphic-fetch';

let apiURL = 'https://api.github.com';

let endPoints = {
  user: '/users/'
};

export default (() => {
  return {
    user: (userName) => {
      if (!userName) {
        throw new Error("User name is mandatory");
      }

      return fetch(`${apiURL}${endPoints.user}${userName}`).then((data) =>
        data.json());
    }
  };
}());
