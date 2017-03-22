var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function(newStatus){
    // Currying, a function that when called returns a function, useful to load the button handler
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function(){
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus ==='started'){
        //render the pause & clear buttons
        return <button className="button secondary" onClick={this.onStatusChange('paused')} >Pause</button>;
      }else if(countdownStatus === 'paused'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );

  }

});

module.exports = Controls;
