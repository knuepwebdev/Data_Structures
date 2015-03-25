var $ = require('jquery');
var $newElement;
var $addElementButton;
var $popButton;
var $clearButton;
var $listOfElements;
var dataStructure;

var setStack = function() {
  var Stack = require('../stores/stack');
  dataStructure = Stack;
};

var show = function(element) {
  var template = require('../templates/ui-template');
  var uiHTML = template(dataStructureType = 'Stack');
  element.html(uiHTML);
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
  dataStructure.pop();
  render(dataStructure.load());
};

var hiClear = function(event) {
  dataStructure.clear();
  render(dataStructure.load());
};

var saveElement = function(element) {
  dataStructure.push(element);
  render(dataStructure.load());
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

var MainView = {
  show: show,
  setStack: setStack
};

module.exports = MainView;
