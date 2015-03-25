var Stack = require('../stores/stack');
var $ = require('jquery');
var $newElement;
var $addElementButton;
var $popButton;
var $clearButton;
var $listOfElements;

var show = function(element) {
  var stackUITemplate = require('../templates/stack-view-template');
  var stackUI = stackUITemplate(dataStructure = 'Stack');
  element.html(stackUI);
  bindUI();
  registerHandlers();
};

var bindUI = function() {
  $newElement = $('.new-element');
  $addElementButton = $('.add-element');
  $listOfElements = $('.list-of-elements');
  $popButton = $('.pop');
  $clearButton = $('.clear');
};

var registerHandlers = function() {
  $addElementButton.click(hiAddElement);
  $popButton.click(hiPopElement);
  $clearButton.click(hiClear);
};

var hiAddElement = function(event) {
  var newElement = $newElement.val();
  saveElement(newElement);
};

var hiPopElement = function(event) {
  Stack.pop();
  render(Stack.load());
};

var hiClear = function(event) {
  Stack.clear();
  render(Stack.load());
};

var saveElement = function(element) {
  Stack.push(element);
  render(Stack.load());
  clearInput();
};

var clearInput = function() {
  $newElement.val('');
};

var render = function(stack) {
  clearList();
  var template = require('../templates/list-item-template');
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
