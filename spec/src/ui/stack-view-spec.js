var chai = require('chai');
// var spies = require('chai-spies');
// chai.use(spies);
var expect = chai.expect;
var $ = require('jquery');
var StackView = require('ui/main-view');

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
    $newElement = $('.new-element');
    $pushElementButton = $('.add-element');
    $popElementButton = $('.pop');
    $clearButton = $('.clear');
  });

  afterEach(function() {
    unRenderStackView();
  });

  it('Exists', function() {
    expect(StackView).to.be.ok;
  });

  it('has an input, a button to push an element, pop an element, and clear', function() {
    expect($newElement.length).to.equal(1);
    expect($pushElementButton.length).to.equal(1);
    expect($popElementButton.length).to.equal(1);
    expect($clearButton.length).to.equal(1);
  });

  it('has an input field for new elements', function() {
    expect($newElement.length).to.equal(1);
  });

  describe('Button click: Push', function() {
    beforeEach(function() {
      Stack = require('../../../src/stores/stack');
      Stack.clear();
    });

    describe('when a valid element is entered', function() {
      beforeEach(function() {
        $newElement.val('hello');
        $pushElementButton.click();
      });

      it('adds the element to the list of elements', function() {
         expect($('.list-of-elements li')).to.have.length(1);
      });
    });

    describe('when an invalid element is entered', function() {
      beforeEach(function() {
        $newElement.val('');
        $pushElementButton.click();
      });

      it('does not add the element', function() {
        expect($('.list-of-elements li')).to.have.length(0);
      })
    });
  });
});