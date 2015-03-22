var stackUI = require('./stack-view-template');
var $ = require('jquery');
var $newElement;
var $addElementButton;
var stack = [];

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
  stack.push(element);
  $listOfElements.append('<li>' + element + '</li>');
};

var renderElements = function() {

};

var StackView = {
  show: show
};

module.exports = StackView;
