var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
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

  describe('button click: add', function() {
    var handleClickEvent;
    var handler;

    describe('when a valid element is entered', function() {
      beforeEach(function() {
        handleClickEvent = function(event) {};
        handler = chai.spy(handleClickEvent);
      });

      it('adds the new element to the stack', function() {

      });

      // it('calls the appropriate handler', function() {
      //   expect(handler).to.have.been.called.once;
      // });      
      // it('clears the input text box'...)
    });
  });
});