var chai = require('chai')
var expect = chai.expect;
var $ = require('jquery');
var StackView = require('ui/stack-view');

var renderStackView = function() {
  $element = $('#spec-dom');
  StackView.show($element);
};

var unRenderStackView = function() {
  $('#spec-dom').html('');
};

describe('Stack UI', function() {
  beforeEach(function() {
    renderStackView();
  });

  afterEach(function() {
    unRenderStackView();
  });

  it('Exists', function() {
    expect(StackView).to.be.ok;
  });

  it('has an input field for new elements', function() {
    expect($('.new-element').length).to.equal(1);
  });
});