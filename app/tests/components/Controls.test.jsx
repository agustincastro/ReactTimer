var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

// describe names a group of tests
describe('Controls', ()=>{
  //Check that the component variable exists when we call it
  it('Should exist', ()=>{
    expect(Controls).toExist();
  });


  describe("render", () => {
    it('Should render pause when started', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('Should render start when paused', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

        expect($startButton.length).toBe(1);
    });


  });


});
