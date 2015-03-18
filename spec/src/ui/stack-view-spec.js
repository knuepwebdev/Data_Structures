var chai = require('chai')
var expect = chai.expect;
var $ = require('jquery');

StackView = require('ui/stack-view');

describe('Stack UI', function() {
  beforeEach(function() {
    $element = $('#spec-dom');
    StackView.show($element);
  });

  it('Exists', function() {
    expect(StackView).to.be.ok;
  });

  it('has an input field for new elements', function() {
    expect($('.new-element').length).to.equal(1);
  });
});