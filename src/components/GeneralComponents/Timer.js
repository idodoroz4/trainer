import React, { Component } from 'react';
import Sound from 'react-sound';
import soundfile from '../../data/sounds/beep1.mp3'

class Timer extends Component {
  render() {
    const min = this.props.minutes
    const sec = this.props.seconds
    const playStatus = this.props.playSound ? Sound.status.PLAYING : Sound.status.STOPPED
    return (
      <div>
        <div style={{ paddingLeft: 80, paddingRight: 80 }}>
          <div className="row d-flex justify-content-center">
            <h1>
              {this.props.title}
            </h1>
          </div>
          <div className="row d-flex justify-content-center">
            <h1 style={{ fontSize: 80 }}>
              { min < 10 ? "0" + min : min }:{ sec < 10 ? "0" + sec : sec }
            </h1>
          </div>
        </div>
        <Sound
          url={soundfile}
          playStatus={playStatus}
        />
      </div>
    );
  }
}

  export default Timer;