var stackUI = require('./stack-view-template');

var show = function(element) {
  element.html(stackUI);
};

var StackView = {
  show: show
};

module.exports = StackView;
