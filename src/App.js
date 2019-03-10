import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimerInput from './components/inputComponents/TimerInput';
import RoundsInput from './components/inputComponents/RoundsInput';
import Timer from './components/Timer';
import './App.css';
import {
  TimerClear,
  TimerStopped,
  TimerActive,
  WorkoutNone,
  WorkoutInterval,
  WorkoutRest,
  CurrentTime,
  ClearRounds
} from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.intervalHandle = null;
    this.tickTime = 1000 // should be 1000 for production. change to 100 for testing
  }

  tick = () => {
    console.log(this.props.remainingSeconds)
    if (this.props.remainingSeconds > 0){
      this.props.CurrentTime(this.props.remainingSeconds - 1)
    } else {
      this.resetCountDown()
    }

  }

  switchWorkoutStatus = () => {
    switch (this.props.workoutStatus){
      case "NONE": // Switch to interval // None -> Interval
        this.props.WorkoutInterval()
        this.props.CurrentTime(this.props.intervalTime)
        break;
      case "INTERVAL": // Switch to Rest // Interval -> Rest
        this.props.WorkoutRest()
        this.props.CurrentTime(this.props.restTime)
        break;
      case "REST": // Switch to Interval or None - depends on number of rounds left
        this.props.WorkoutNone()
        break;
      default:
        return
    }
  }

  continueCountDown = () => {
    this.props.TimerActive()
    this.intervalHandle = setInterval(this.tick, this.tickTime);
  }

  startCountDown = () => {
    this.props.TimerActive()
    this.switchWorkoutStatus()
    this.intervalHandle = setInterval(this.tick, this.tickTime);
  }

  stopCountDown = () => {
    console.log("Countdown stopped")
    clearInterval(this.intervalHandle)
    this.props.TimerStopped()

  }

  resetCountDown = () => {
    console.log("Countdown has been reset")
    clearInterval(this.intervalHandle)
    this.props.TimerClear()
    this.props.WorkoutNone()
    this.props.ClearRounds()

  }

  render() {
    console.log(this.props.timerStatus)
    return (
      <div className="container">
        <div>
          { this.props.timerStatus === "CLEAR" &&
            <div>
              <TimerInput title="Interval time" />
              <TimerInput title="Rest time" />
              <RoundsInput />
            </div>
          }
          { this.props.timerStatus !== "CLEAR" &&
            <div>
              <Timer
                title={this.props.workoutStatus === "INTERVAL" ? "Workout" : "Rest"}
                minutes={Math.floor(this.props.remainingSeconds / 60)}
                seconds={this.props.remainingSeconds % 60}
              />
            </div>
          }
          <br/><br/><br/>
          <div className="row justify-content-md-center">
            <div className="col d-flex justify-content-center">
              { this.props.timerStatus === "CLEAR" ? <button disabled={ this.props.intervalTime > 0 ? false : true }  className="btn btn-success btn-lg" onClick={this.startCountDown}>START</button> : null }
              { this.props.timerStatus === "STOPPED" ? <button className="btn btn-success btn-lg" onClick={this.continueCountDown}>CONTINUE</button> : null }
              { this.props.timerStatus === "ACTIVE" ? <button className="btn btn-danger btn-lg" onClick={this.stopCountDown}>STOP</button> : null }
              { this.props.timerStatus === "STOPPED" ?  <button className="btn btn-warning btn-lg" onClick={this.resetCountDown}>RESET</button> : null }
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
        intervalTime: state.ChangeIntervalTime.intervalSeconds,
        restTime: state.ChangeRestTime.restSeconds,
        timerStatus: state.TimerStatus.timerStatus,
        workoutStatus: state.WorkoutStatus.workoutStatus,
        remainingSeconds: state.RemainingSeconds.remainingSeconds
    };
}

const actions = {
  TimerClear,
  TimerStopped,
  TimerActive,
  WorkoutNone,
  WorkoutInterval,
  WorkoutRest,
  CurrentTime,
  ClearRounds
}

export default connect(mapStateToProps,actions)(App);;
