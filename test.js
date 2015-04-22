"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

"use strict";
var assert = _interopRequire(require("assert"));

var githubFetcher = _interopRequire(require("./"));

it("should return the user info", function () {
  console.log(githubFetcher);
  githubFetcher.user("hemanth").then(function (data) {
    return assert.equal(data.login, "hemanth");
  });
});

