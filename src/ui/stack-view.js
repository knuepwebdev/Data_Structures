var stackUI = require('./stack-view-template');
var Stack = require('../stores/stack');
var $ = require('jquery');
var $newElement;
var $addElementButton;

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
  render(element);
};

var render = function(element) {
  var template = require('./list-item');
  var listItem = template(newElement = element);
  $listOfElements.append(listItem);
};

var StackView = {
  show: show
};

module.exports = StackView;
