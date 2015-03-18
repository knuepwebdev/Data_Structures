var jade = require('jade');
var html = jade.render("<input class='new-element' />");

var show = function(element) {
  element.html(html);
};

var StackView = {
  show: show
};

module.exports = StackView;
