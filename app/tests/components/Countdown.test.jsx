var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

// describe names a group of tests
describe('Countdown', ()=>{
  //Check that the component variable exists when we call it
  it('Should exist', ()=>{
    expect(Countdown).toExist();
  });


  describe('handleSetCountdown', ()=>{
    it('Should set state to started and count down', (done)=>{

      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      //This is an asynchronous test, it should call done() after its done for
      //mocha to continue the tests.
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('Should never set count less than zero', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');

      //This is an asynchronous test, it should call done() after its done for
      //mocha to continue the tests.
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });

    it('Should pause countdown on paused status', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      //This is an asynchronous test, it should call done() after its done for
      //mocha to continue the tests.
      setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused')
        done();
      },1001);
    });

    it('Should reset count on stop status', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      //This is an asynchronous test, it should call done() after its done for
      //mocha to continue the tests.
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped')
        done();
      },1001);
    });



  });


});
