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
        seconds: '00',
        minutes: '00',
        secondsRemaining: 0,
        status: 'clear'
      };

    this.intervalHandle = null;
    }

    handleChange = (event) => {
      if ( event.target.value < 10) {
        this.setState({
          minutes: "0" + event.target.value,
          secondsRemaining: event.target.value * 60
        })
      }
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
        minutes: '00',
        seconds: '00',
        secondsRemaining: 0,
        status: "clear"
      })
    }

     render() {
        return (
         <div>
          <TimerInput handleChange={this.handleChange}/>
          <RoundInput/>
          <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
          { this.state.status === "clear" & this.state.secondsRemaining > 0 ? <ButtonComp action={this.startCountDown} name="Start"/> : null }
          { this.state.status === "stopped" ? <ButtonComp action={this.startCountDown} name="Continue"/> : null }
          { this.state.status === "active" ? <ButtonComp action={this.stopCountDown} name="Stop"/> : null }
          { this.state.status === "stopped" ?  <ButtonComp action={this.resetCountDown} name="Reset"/> : null }
        </div>
       );
     }
   }

export default App;
