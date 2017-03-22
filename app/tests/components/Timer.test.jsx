var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

// describe names a group of tests
describe('Timer', ()=>{
  //Check that the component variable exists when we call it
  it('Should exist', ()=>{
    expect(Timer).toExist();
  });

  it('should start timer in started status', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(()=> {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);

  });


  it('should pause timer in paused status', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    expect(timer.state.count).toBe(10);

    setTimeout(()=> {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);

  });


  it('should clear count in stoped status', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(()=> {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);

  });



});
