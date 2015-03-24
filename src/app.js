var StackView = require('./ui/stack-view');

var initialize = function() {
  var element = $('.container');
  StackView.show(element);
};

var App = {
  initialize: initialize
};

module.exports = App;