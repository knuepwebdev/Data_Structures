var elements = [];

function push(element) {
  elements.push(element);
};

function load() {
  return reverseElements();
};

function reverseElements() {
  var stack = [];
  for (var i = elements.length - 1; i >= 0; i--) {
    stack.push(elements[i]);
  };

  return stack;
};

var Stack = {
  push: push,
  load: load
  // pop: pop,
  // clear: clear
};

module.exports = Stack;