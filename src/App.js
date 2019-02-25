import React, { Component } from 'react';
import TimerInput from './components/inputComponents/TimerInput';
import ClockView from './components/clockView';
import './App.css';

  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        workSeconds: 0,
        workMinutes: 0,
        workSecondsView: '00',
        workMinutesView: '00',
        restSeconds: 0,
        restMinutes: 0,
        restSecondsView: '00',
        restMinutesView: '00',
        presSeconds: '00',
        presMinutes: '00',
        presSecondsView: '00',
        presMinutesView: '00',
        secondsRemaining: 0,
        buttonStatus: 'clear',
        timerStatus: "none" // none, work, rest, finish
      };

    this.intervalHandle = null;
    }

    tick = () => {
      var min = Math.floor(this.state.secondsRemaining / 60);
      var sec = this.state.secondsRemaining % 60;

      if ( sec === -1) {
        clearInterval(this.intervalHandle);
        this.setState({
          secondsRemaining: 0,
          buttonStatus: 'clear',
          timerStatus: "none"
        })
        return
      }

      this.setState({
        presMinutes: min,
        presSeconds: sec
      })

      if (sec < 10) {
        this.setState({
          presSeconds: "0" + sec,
        })
      }

      if (min < 10) {
        this.setState({
          presMinutes: "0" + min,
        })
      }

      this.setState(prevState => {
        return {secondsRemaining: prevState.secondsRemaining - 1}
      })
    }

    startCountDown = () => {
      if ( this.state.timerStatus === 'work') {
        return
      }
      console.log("Countdown started")
      this.setState({
        presSeconds: this.state.workSeconds,
        presMinutes: this.state.workMinutes,
        buttonStatus: 'active',
        secondsRemaining: this.state.workMinutes * 60 + this.state.workSeconds - 1
      })

      if (this.state.workSeconds < 10) {
        this.setState({
          presSeconds: "0" + this.state.workSeconds,
        })
      }

      if (this.state.workMinutes < 10) {
        this.setState({
          presMinutes: "0" + this.state.workMinutes,
        })
      }

      this.intervalHandle = setInterval(this.tick, 1000);

    }

    stopCountDown = () => {
      console.log("Countdown stopped")
      clearInterval(this.intervalHandle)
      this.setState({
        buttonStatus: 'stopped'
      })
    }

    resetCountDown = () => {
      console.log("Countdown has been reset")
      clearInterval(this.intervalHandle)
      this.setState({
        secondsRemaining: 0,
        buttonStatus: 'clear',
        timerStatus: "none"
      })
    }

    workMinusSecond = () => {
        if (this.state.workSeconds === 0){
            return
        }

        this.workSecHandleChange(this.state.workSeconds - 1)
    }

    workPlusSecond = () => {
        if (this.state.workSeconds === 59 && this.state.workMinutes === 59){
            return
        } else if (this.state.workSeconds === 59){
            return
        }

        this.workSecHandleChange(this.state.workSeconds + 1)
    }

    workMinusMinute = () => {
        if (this.state.workMinutes === 0){
            return
        } else {
            var min = this.state.workMinutes - 1
        }
        this.workMinHandleChange(min)
    }

    workPlusMinute = () => {
        if (this.state.workMinutes === 59){
            return
        } else {
            var min = this.state.workMinutes + 1
        }
        this.workMinHandleChange(min)
    }

    workMinHandleChange = (min) => {

        if ( min < 10) {
            this.setState({
              workMinutesView: "0" + min,
              workMinutes: min
            })
        } else {
            this.setState({
              workMinutesView: min,
              workMinutes: min
            })
        }
    }

    workSecHandleChange = (sec) => {
        if ( sec < 10) {
            this.setState({
              workSecondsView: "0" + sec,
              workSeconds: sec
            })
        } else {
            this.setState({
              workSecondsView: sec,
              workSeconds: sec
            })
        }
    }

    restMinusSecond = () => {
      if (this.state.restSeconds === 0){
          return
      }

      this.restSecHandleChange(this.state.restSeconds - 1)
    }

    restPlusSecond = () => {
        if (this.state.restSeconds === 59 && this.state.restMinutes === 59){
            return
        } else if (this.state.restSeconds === 59){
            return
        }

        this.restSecHandleChange(this.state.restSeconds + 1)
    }

    restMinusMinute = () => {
        if (this.state.restMinutes === 0){
            return
        } else {
            var min = this.state.restMinutes - 1
        }
        this.restMinHandleChange(min)
    }

    restPlusMinute = () => {
        if (this.state.restMinutes === 59){
            return
        } else {
            var min = this.state.restMinutes + 1
        }
        this.restMinHandleChange(min)
    }

    restMinHandleChange = (min) => {

        if ( min < 10) {
            this.setState({
              restMinutesView: "0" + min,
              restMinutes: min
            })
        } else {
            this.setState({
              restMinutesView: min,
              restMinutes: min
            })
        }
    }

    restSecHandleChange = (sec) => {
        if ( sec < 10) {
            this.setState({
            restSecondsView: "0" + sec,
            restSeconds: sec
            })
        } else {
            this.setState({
              restSecondsView: sec,
              restSeconds: sec
            })
        }
    }

     render() {
        return (
          <div className="container">
            <div>
              { this.state.buttonStatus === "clear" &&
                <div>
                <TimerInput
                  minutes={this.state.workMinutesView}
                  seconds={this.state.workSecondsView}
                  plusSec={this.workPlusSecond}
                  minusSec={this.workMinusSecond}
                  plusMin={this.workPlusMinute}
                  minusMin={this.workMinusMinute}
                  title="Interval time"
                />
                <TimerInput
                  minutes={this.state.restMinutesView}
                  seconds={this.state.restSecondsView}
                  plusSec={this.restPlusSecond}
                  minusSec={this.restMinusSecond}
                  plusMin={this.restPlusMinute}
                  minusMin={this.restMinusMinute}
                  title="Rest time"
                />
              </div>
              }
              { this.state.buttonStatus !== "clear" &&
                <div className="d-flex justify-content-center">
                  <ClockView minutes={this.state.presMinutes} seconds={this.state.presSeconds} />
                </div>
              }
              <br/><br/><br/>
              <div className="row justify-content-md-center">
                <div className="col d-flex justify-content-center">
                  { this.state.buttonStatus === "clear" ? <button disabled={ this.state.workMinutes + this.state.workSeconds > 0 ? false : true }  className="btn btn-success btn-lg" onClick={this.startCountDown}>START</button> : null }
                  { this.state.buttonStatus === "stopped" ? <button className="btn btn-success btn-lg" onClick={this.startCountDown}>CONTINUE</button> : null }
                  { this.state.buttonStatus === "active" ? <button className="btn btn-danger btn-lg" onClick={this.stopCountDown}>STOP</button> : null }
                  { this.state.buttonStatus === "stopped" ?  <button className="btn btn-warning btn-lg" onClick={this.resetCountDown}>RESET</button> : null }
                </div>

              </div>
            </div>
          </div>

       );
     }
   }

export default App;
