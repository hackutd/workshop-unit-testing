const assert = require('chai').assert;
const utils = require('../utils');

describe('utils', function () {
  describe('reverse', function () {
    it('reverses string', function () {
      const result = utils.reverse('test');
      assert.equal(result, 'tset');
    });
    it('handles non-strings', function () {
      const result = utils.reverse(0);
      assert.equal(result, '');
    });
  });
  describe('isString', function () {
    it('returns true for string', function () {
      const result = utils.isString('text');
      assert.equal(result, true);
    });
    it('returns false for non-strings', function () {
      const result = utils.isString(0);
      assert.equal(result, false);
    });
  });
  describe('piglatin', function () {
    it('converts sentence to piglatin', function () {
      const result = utils.piglatin('Hello my name is');
      assert.equal(result, 'Ollehay ymay emanay siay');
    });
    it('converts word to piglatin', function () {
      const result = utils.piglatin('Hello');
      assert.equal(result, 'Ollehay');
    });
    it('handles non-strings', function () {
      const result = utils.piglatin(0);
      assert.equal(result, '');
    });
  });
});
