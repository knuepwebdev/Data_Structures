var elements = [];

var name = function() {
  return 'Queue';
};

var push = function(element) {
  if (!element) {
    alert('Error. Invalid input');
  } else {
    elements.push(element);
  }
};

var pop = function() {
  elements = elements.slice(1);
};

var load = function() {
  return elements;
};

var Queue = {
  name: name,
  push: push,
  pop: pop,
  load: load
};

module.exports = Queue;