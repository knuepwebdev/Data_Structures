var MainView = require('./main-view');

var show = function(element) {
  var HeaderTemplate = require('../templates/header');
  var headerHTML = HeaderTemplate();
  element.html(headerHTML);
  bindUI();
  registerHandlers();
};

var bindUI = function() {
  $stackLink = $('.stack.btn');
  $queueLink = $('.queue.btn');
};

var registerHandlers = function() {
  $stackLink.click(hiSetStack);
  $queueLink.click(hiSetQueue);
};

var hiSetStack = function() {
  MainView.setStack();
};
  
var hiSetQueue = function() {
  MainView.setQueue();
};

var Header = {
  show: show
};

module.exports = Header;