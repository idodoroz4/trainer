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
        <div>
          <h1>{this.props.title}</h1>
        </div>
        <div>
          <h1 style={{ fontSize: 40 }}>
            { min < 10 ? "0" + min : min }:{ sec < 10 ? "0" + sec : sec }
          </h1>
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