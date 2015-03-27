var expect = require('chai').expect;
var Queue = require('../../../src/stores/queue');
// var queue = Queue.load();

var initializeQueue = function() {
  var elements = ['1st', '2nd', '3rd'];
  elements.forEach(function(element, index, array) {
    Queue.push(element);
  });  
};

describe('Queue', function() {
  describe('#load()', function() {
    it('returns the elements in the queue in the proper order', function() {
      initializeQueue();
      expect(Queue.load()).to.eql(['1st', '2nd', '3rd']);
    });
  });
});