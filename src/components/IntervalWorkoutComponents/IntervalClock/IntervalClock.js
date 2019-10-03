import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from '../../GeneralComponents/Timer';
import { BeepSound } from '../../GeneralComponents/Sounds'
import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';
import { ProgressBar } from '../../GeneralComponents/ProgressBar';
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
          BeepSound.setVolume(0.8)
        }
    }

    tick = () => {
        if (this.props.remainingSeconds > 0){
            this.props.CurrentTime(this.props.remainingSeconds - 1)
            BeepSound.play()
        } else if (this.props.restTime > 0 && this.props.workoutStatus === "INTERVAL") {
            BeepSound.setVolume(0.2)
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
                <br/><br/>
                { this.props.workoutStatus === "INTERVAL" &&
                    <ProgressBar
                        color="bg-info"
                        width={`${100-(this.props.remainingSeconds)/this.props.intervalTime*100}`}
                    />
                }
                { this.props.workoutStatus === "REST" &&
                    <ProgressBar
                        color="bg-warning"
                        width={`${100-(this.props.remainingSeconds)/this.props.restTime*100}`}
                    />
                }
                <br/><br/>
                <ProgressBar
                    color="bg-success"
                    width={`${(this.props.currentRound)/this.props.rounds*100}`}
                />
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
        timerStatus: state.IntervalTimerStatus.timerStatus,
        workoutStatus: state.IntervalWorkoutStatus.workoutStatus,
        remainingSeconds: state.IntervalRemainingSeconds.remainingSeconds,
        currentRound: state.IntervalCurrentRound.currentRound,
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

