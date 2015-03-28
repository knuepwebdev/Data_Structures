var expect = require('chai').expect;
var Queue = require('../../../src/stores/queue');

var initializeQueue = function() {
  var elements = ['1st', '2nd', '3rd'];
  elements.forEach(function(element, index, array) {
    Queue.push(element);
  });  
};

describe('Queue', function() {
  beforeEach(function() {
    Queue.clear();
    initializeQueue();
  });
  describe('#load()', function() {
    it('returns the elements in the queue in the proper order', function() {
      expect(Queue.load()).to.eql(['1st', '2nd', '3rd']);
    });
  });

  describe('#push()', function() {
    it('pushes the element to the back of the queue', function() {
      Queue.push('element');
      expect(Queue.load()).to.eql(['1st', '2nd', '3rd', 'element']);
    });
  });

  describe('#pop()', function() {
    it('pops an element from the front of the queue', function() {
      Queue.pop();
      expect(Queue.load()).to.eql(['2nd', '3rd']);
    });
  });

  describe('#clear()', function() {
    it('clears the queue', function() {
      Queue.clear();
      expect(Queue.load()).to.have.length(0);
    });
  });
});