'use strict';
import assert from 'assert';
import githubFetcher from './';

it('should return the user info', () => {
      githubFetcher.user('hemanth').then( (data) =>
        assert.equal(data.login,'hemanth'));
});

it('should return the orgs of the user', () => {
      githubFetcher.orgs('hemanth').then( (data) =>
        assert.equal(data.login,'hemanth'));
});


it('should return the gist of the user', () => {
      githubFetcher.gists('hemanth').then( (data) => console.log(data) );
});