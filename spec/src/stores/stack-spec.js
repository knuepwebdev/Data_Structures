var expect = require('chai').expect;
var Stack = require('../../../src/stores/stack.js');

describe('Stack', function() {
  beforeEach(function() {
    Stack.clear();
  });

  describe('#load()', function() {
    it('returns the elements in the stack', function() {
      var elements = ['1st', '2nd', '3rd'];
      elements.forEach(function(element, index, array) {
        Stack.push(element);
      });

      expect(Stack.load()).to.eql(['3rd', '2nd', '1st']);
    });
  });

  describe('#push()', function() {
    it('pushes an element onto the stack', function() {
      var element = 'an element';
      Stack.push(element);
      stack = Stack.load();
      expect(stack).to.have.length(1);
    });
  });
});