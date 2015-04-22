"use strict";
var polyfill = require("es6-promise").polyfill;
polyfill();

require("isomorphic-fetch");

var apiURL = "https://api.github.com";

var endPoints = {
  user: "/users/"
};

module.exports = (function () {
  return {
    user: function (userName) {
      if (!userName) {
        throw new Error("User name is mandatory");
      }

      return fetch("" + apiURL + "" + endPoints.user + "" + userName).then(function (data) {
        return data.json();
      });
    }
  };
})();

