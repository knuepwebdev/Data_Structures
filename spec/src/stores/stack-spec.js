var expect = require('chai').expect;
var Stack = require('../../../src/stores/stack.js');

var initializeStack = function() {
  var elements = ['1st', '2nd', '3rd'];
  elements.forEach(function(element, index, array) {
    Stack.push(element);
  });
};

describe('Stack', function() {
  beforeEach(function() {
    Stack.clear();
  });

  describe('#load()', function() {
    beforeEach(function() {
      initializeStack();
    });

    it('returns the elements in the stack in the proper order', function() {
      expect(Stack.load()).to.eql(['3rd', '2nd', '1st']);
    });
  });

  describe('#push()', function() {
    it('pushes an element onto the stack', function() {
      var element = 'an element';
      Stack.push(element);
      expect(Stack.load()).to.have.length(1);
    });
  });

  describe('#pop()', function() {
    beforeEach(function() {
      initializeStack();
    });    

    it('pops an element off the top of the stack', function() {
      Stack.pop();
      expect(Stack.load()).to.eql(['2nd', '1st']);
    });
  });
});