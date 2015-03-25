var MainView = require('./main-view');
// var $main, $stackLink, $queueLink;

var show = function(element) {
  var HeaderTemplate = require('../templates/header');
  var headerHTML = HeaderTemplate();
  element.html(headerHTML);
  bindUI();
  registerHandlers();
};

var bindUI = function() {
  // $main = $('.main');
  $stackLink = $('.stack.btn');
  $queueLink = $('.queue.btn');
};

var registerHandlers = function() {
  $stackLink.click(hiSetStack);
  // $queueLink.click(hiShowQueue);
};

var hiSetStack = function() {
  MainView.setStack();
};

// var hiShowQueue = function() {
  
// };
  
var Header = {
  show: show
};

module.exports = Header;