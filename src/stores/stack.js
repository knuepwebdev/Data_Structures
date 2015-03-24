var elements = [];

function push(element) {
  if (!element) {
    alert('Error. Invalid input');
  } else {
    elements.push(element);
  }
};

function load() {
  return reverseElements();
};

function pop() {
  elements.pop();
};

function reverseElements() {
  var stack = [];
  for (var i = elements.length - 1; i >= 0; i--) {
    stack.push(elements[i]);
  };

  return stack;
};

var Stack = {
  load: load,
  push: push,
  pop: pop
  // clear: clear
};

module.exports = Stack;