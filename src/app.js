var Header = require('./ui/header');
var MainView = require('./ui/main-view');

var initialize = function() {
  var $header = $('.header');
  var $mainContent = $('.main');
  Header.show($header);
  MainView.show($mainContent);
};

var App = {
  initialize: initialize
};

module.exports = App;