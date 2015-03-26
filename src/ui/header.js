var MainView = require('./main-view');
var $stackLink;
var $queueLink;
var $stackListItem;
var $queueListItem;

var show = function(element) {
  var HeaderTemplate = require('../templates/header');
  var headerHTML = HeaderTemplate();
  element.html(headerHTML);
  bindUI();
  registerHandlers();
};

var bindUI = function() {
  $stackLink = $('a.stack');
  $queueLink = $('a.queue');
  $stackListItem = $('li.stack');
  $queueListItem = $('li.queue');
};

var registerHandlers = function() {
  $stackLink.click(hiSetStack);
  $queueLink.click(hiSetQueue);
};

var hiSetStack = function(event) {
  $queueListItem.removeClass("active");
  $stackListItem.addClass("active");
  MainView.setStack();
};
  
var hiSetQueue = function(event) {
  $stackListItem.removeClass("active");
  $queueListItem.addClass("active");
  MainView.setQueue();
};

var Header = {
  show: show
};

module.exports = Header;