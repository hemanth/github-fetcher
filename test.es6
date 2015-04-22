'use strict';
import assert from 'assert';
import githubFetcher from './';

it('should return the user info', () => {
      githubFetcher.user('hemanth').then( (data) =>
        assert.equal(data.login,'hemanth'));
});
