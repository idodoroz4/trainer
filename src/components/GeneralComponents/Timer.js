import React, { Component } from 'react';

class Timer extends Component {
  render() {
    const min = this.props.minutes
    const sec = this.props.seconds
    return (
      <div>
        { this.props.title && <h1>{this.props.title}</h1> }
        <h1 style={{ fontSize: 60 }}>
          { min < 10 ? "0" + min : min }:{ sec < 10 ? "0" + sec : sec }
        </h1>
      </div>
    );
  }
}

export default Timer;