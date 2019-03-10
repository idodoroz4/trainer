import React, { Component } from 'react';


class Timer extends Component {
  render() {
    const min = this.props.minutes
    const sec = this.props.seconds
    return (
      <div>
        <div className="row d-flex justify-content-center">
          <h3>
            {this.props.title}
          </h3>
        </div>
        <br /><br />
        <div className="row d-flex justify-content-center">
          <h1 style={{ fontSize: 80 }}>
            { min < 10 ? "0" + min : min }:{ sec < 10 ? "0" + sec : sec }
          </h1>
        </div>
      </div>
    );
  }
}

  export default Timer;