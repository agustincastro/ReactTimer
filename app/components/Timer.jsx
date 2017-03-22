var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState: function(){
    return{
      count: 0,
      timerStatus: 'paused'
    };
  },

  // This function gets called whenever state or props is updated
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
        this.startTimer();
        break;
        case 'stopped':
          this.setState({count: 0, timerStatus: 'paused'});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  startTimer: function(){
    var that = this;
    this.timer = setInterval( ()=>{
      //debugger;
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    },1000);
  },

  handleStatusChange: function(newStatus){
    this.setState({timerStatus: newStatus});
  },

  render: function(){
    var {timerStatus, count} = this.state;

    return(
      <div>
        <h1 className='page-title'>Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
