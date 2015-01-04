/**
 * Created by Yinlin on 11/21/14.
 */

var assert = require('assert');

describe('0-envTest', function() {
  describe('mocha', function() {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });

  describe('Unit.js & Should.js', function() {
    var test = require('unit.js');
    it('Unit.js', function() {
      // test 'string' type
      test.should('foobar').be.type('string');
      // then that actual value '==' expected value
      test.should('foobar' == 'foobar').be.ok;
      // then that actual value '===' expected value
      test.should('foobar').be.equal('foobar');
      // Should.js library (alternative style)
    });

    it('Should.js', function(){
      var should = test.should;
      // test 'string' type
      ('foobar').should.be.type('string');
      // then that actual value '==' expected value
      ('foobar' == 'foobar').should.be.ok;
      // then that actual value '===' expected value
      ('foobar').should.be.equal('foobar');
      // this shortcut works also like this
      // test 'string' type
      should('foobar').be.type('string');
      // then that actual value '==' expected value
      should('foobar' == 'foobar').be.ok;
      // then that actual value '===' expected value
      should('foobar').be.equal('foobar');
    });
  });
});
