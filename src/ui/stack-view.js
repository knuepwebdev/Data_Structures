var stackUI = require('./stack-view-template');
var Stack = require('../stores/stack');
var $ = require('jquery');
var $newElement;
var $addElementButton;
var $listOfElements;

var show = function(element) {
  element.html(stackUI);
  bindUI();
  registerHandlers();
};

var bindUI = function() {
  $newElement = $('.new-element');
  $addElementButton = $('.add-element');
  $listOfElements = $('.list-of-elements');
};

var registerHandlers = function() {
  $addElementButton.click(hiAddElement);
};

var hiAddElement = function(event) {
  var newElement = $newElement.val();
  saveElement(newElement);
};

var saveElement = function(element) {
  Stack.push(element);
  var stack = Stack.load();
  render(stack);
};

var render = function(stack) {
  clearList();
  var template = require('./list-item');
  stack.forEach(function(element, index, array) {
    var listItem = template(newElement = element);
    $listOfElements.append(listItem);
  });
};

var clearList = function() {
  $listOfElements.html('');
};

var StackView = {
  show: show
};

module.exports = StackView;
