import React, { Component } from 'react';
import ButtonComp from './components/ButtonComp'
import Timer from './components/Timer'
import TimerInput from './components/inputComponents/TimerInput'
import RoundInput from './components/inputComponents/RoundsInput'
import './App.css';

  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        seconds: 0,
        minutes: 0,
        secondsView: '00',
        minutesView: '00',
        secondsRemaining: 0,
        status: 'clear'
      };

    this.intervalHandle = null;
    }

    tick = () => {
      var min = Math.floor(this.state.secondsRemaining / 60);
      var sec = this.state.secondsRemaining % 60;

      this.setState({
        minutes: min,
        seconds: sec
      })

      if (sec < 10) {
        this.setState({
          seconds: "0" + sec,
        })
      }

      if (min < 10) {
        console.log("123")
        this.setState({
          minutes: "0" + min,
        })
      }

      if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
      }

      this.setState(prevState => {
        return {secondsRemaining: prevState.secondsRemaining - 1}
      })
    }

    startCountDown = () => {
      if ( this.state.status === 'active') {
        return
      }
      console.log("Countdown started")
      this.secondsRemaining = this.state.minutes * 60 + this.state.seconds;
      this.intervalHandle = setInterval(this.tick, 1000);
      this.setState({
        status: 'active'
      })
    }

    stopCountDown = () => {
      console.log("Countdown stopped")
      clearInterval(this.intervalHandle)
      this.setState({
        status: 'stopped'
      })
    }

    resetCountDown = () => {
      console.log("Countdown has been reset")
      clearInterval(this.intervalHandle)
      this.secondsRemaining = 0
      this.setState({
        seconds: 0,
        minutes: 0,
        secondsView: '00',
        minutesView: '00',
        secondsRemaining: 0,
        status: 'clear'
      })
    }

    minusSecond = () => {
      if (this.state.seconds === 0){
        return
      }

      this.secHandleChange(this.state.seconds - 1)
    }

    plusSecond = () => {
      if (this.state.seconds === 59 && this.state.minutes === 59){
          return
      } else if (this.state.seconds === 59){
          return
      }

      this.secHandleChange(this.state.seconds + 1)
    }

    minusMinute = () => {
      if (this.state.minutes === 0){
        return
      } else {
        var min = this.state.minutes - 1
      }
      this.minHandleChange(min)
    }

    plusMinute = () => {
      if (this.state.minutes === 59){
        return
      } else {
        var min = this.state.minutes + 1
      }
      this.minHandleChange(min)
    }

    minHandleChange = (min) => {
      console.log(min)
      if ( min < 10) {
        this.setState({
          minutesView: "0" + min,
          minutes: min
        })
      } else {
        this.setState({
          minutesView: min,
          minutes: min
        })
      }
    }

    secHandleChange = (sec) => {
      if ( sec < 10) {
        this.setState({
          secondsView: "0" + sec,
          seconds: sec
        })
      } else {
        this.setState({
          secondsView: sec,
          seconds: sec
        })
      }
    }

     render() {
        return (
          <div>
            <TimerInput
              minutes={this.state.minutesView}
              seconds={this.state.secondsView}
              plusSec={this.plusSecond}
              minusSec={this.minusSecond}
              plusMin={this.plusMinute}
              minusMin={this.minusMinute}
              title="Interval time"
            />
            <TimerInput
              minutes={this.state.minutesView}
              seconds={this.state.secondsView}
              plusSec={this.plusSecond}
              minusSec={this.minusSecond}
              plusMin={this.plusMinute}
              minusMin={this.minusMinute}
              title="Rest time"
            />
            <RoundInput/>
            <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
            { this.state.status === "clear" ? <ButtonComp action={this.startCountDown} name="Start"/> : null }
            { this.state.status === "stopped" ? <ButtonComp action={this.startCountDown} name="Continue"/> : null }
            { this.state.status === "active" ? <ButtonComp action={this.stopCountDown} name="Stop"/> : null }
            { this.state.status === "stopped" ?  <ButtonComp action={this.resetCountDown} name="Reset"/> : null }
          </div>

       );
     }
   }

export default App;

/*

*/
