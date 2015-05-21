'use strict';
import assert from 'assert';
import githubFetcher from './';

it('should return the user info', () => {
  githubFetcher.user('hemanth').then((data) =>
    assert.equal(data.login, 'hemanth'));
});

it('should return the orgs of the user', () => {
  githubFetcher.orgs('hemanth').then((data) =>
    assert.equal(data.login, 'hemanth'));
});

it('should return the gists of the user', () => {
  githubFetcher.gists('hemanth').then((data) =>
    assert.equal(data[0].public, true));
});

it('should return all the stargazers.', () => {
  githubFetcher.stargazers('hemanth', 'es7-features').then((data) =>
    assert.equal(data.length > 0, true));
});

it('should return all the repos for the given user.', () => {
  githubFetcher.repos('hemanth').then((data) =>
    assert.equal(data.length > 0, true));
});
