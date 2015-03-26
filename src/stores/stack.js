var elements = [];

function load() {
  return reverseElements();
};

function push(element) {
  if (!element) {
    alert('Error. Invalid input');
  } else {
    elements.push(element);
  }
};

function pop() {
  elements.pop();
};

function clear() {
  elements = [];
};

function reverseElements() {
  var stack = [];
  for (var i = elements.length - 1; i >= 0; i--) {
    stack.push(elements[i]);
  };

  return stack;
};

function name() {
  return 'Stack';
}

var Stack = {
  load: load,
  push: push,
  pop: pop,
  clear: clear,
  name: name
};

module.exports = Stack;