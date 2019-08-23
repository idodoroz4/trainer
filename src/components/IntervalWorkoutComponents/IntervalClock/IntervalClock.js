import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from '../../GeneralComponents/Timer';

import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';

import {
  TimerStopped,
  TimerActive,
  WorkoutNone,
  WorkoutInterval,
  WorkoutRest,
  CurrentTime,
  ClearRounds,
  NextRound,
} from './IntervalClockActions';


class IntervalClock extends Component {
    constructor(props){
        super(props)
        this.tickTime = 1000 // should be 1000 for production. change to 100 for testing
    }

    nextRound = () => {
        if (this.props.rounds === this.props.currentRound){
          // Workout ended
          this.resetCountDown()
        } else {
          this.props.NextRound()
          this.props.CurrentTime(this.props.intervalTime) // updates 'this.props.remainingSeconds'
          this.props.WorkoutInterval()
        }
    }

    tick = () => {
        if (this.props.remainingSeconds > 0){
            this.props.CurrentTime(this.props.remainingSeconds - 1)
        } else if (this.props.restTime > 0 && this.props.workoutStatus === "INTERVAL") {
            this.props.WorkoutRest()
            this.props.CurrentTime(this.props.restTime)
        } else {
            this.nextRound()
        }
    }

    continueCountDown = () => {
        console.log("Countdown continued")
        this.props.TimerActive()
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
        this.props.WorkoutNone()
        this.props.ClearRounds()
        this.props.history.push('/IntervalWorkout')
    }

    componentDidMount(){
        console.log("Countdown started")
        this.props.TimerActive()
        this.props.WorkoutInterval()
        this.props.CurrentTime(this.props.intervalTime)
        this.intervalHandle = setInterval(this.tick, this.tickTime);
    }

    render(){
        return (
            <div>
                <div>
                <Timer
                    title={this.props.workoutStatus === "INTERVAL" ? "Workout" : "Rest"}
                    minutes={Math.floor(this.props.remainingSeconds / 60)}
                    seconds={this.props.remainingSeconds % 60}
                    playSound={true}
                />
                <br/><br/>
                <div className="row justify-content-md-center">
                    <div className="col d-flex justify-content-center">
                    <h2>{this.props.currentRound} / {this.props.rounds}</h2>
                    </div>
                </div>
                </div>
                <br/><br/><br/>
                <div className="row justify-content-md-center">
                <div className="col d-flex justify-content-center">
                    { this.props.timerStatus === "STOPPED" ? <button className="btn btn-success btn-lg" onClick={this.continueCountDown}>CONTINUE</button> : null }
                    { this.props.timerStatus === "ACTIVE" ? <button className="btn btn-danger btn-lg" onClick={this.stopCountDown}>STOP</button> : null }
                    { this.props.timerStatus === "STOPPED" ?  <button className="btn btn-warning btn-lg" onClick={this.resetCountDown}>RESET</button> : null }
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        intervalTime: state.ChangeIntervalTime.intervalSeconds,
        restTime: state.ChangeIntervalRestTime.intervalRestSeconds,
        timerStatus: state.TimerStatus.timerStatus,
        workoutStatus: state.WorkoutStatus.workoutStatus,
        remainingSeconds: state.RemainingSeconds.remainingSeconds,
        currentRound: state.CurrentRound.currentRound,
        rounds: state.IntervalRoundsCount.intervalRounds
    };
}

const actions = {
    TimerStopped,
    TimerActive,
    WorkoutNone,
    WorkoutInterval,
    WorkoutRest,
    CurrentTime,
    ClearRounds,
    NextRound,
    ChangeMainPageTitle
  }

  export default connect(mapStateToProps,actions)(IntervalClock);

