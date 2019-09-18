import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from '../../GeneralComponents/Timer'

import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';

import {
  TimerStatus,
  CountToWorkoutStatus,
  CurrentCount,
  ClearRounds,
  NextRound,
} from './CountToClockActions';


class CountToClock extends Component {
    nextRound = () => {
        if (this.props.counterRounds === this.props.currentRound){
          // Workout ended
          this.resetCount()
        } else {
          this.props.NextRound()
          this.props.CurrentCount(0)
          this.props.CountToWorkoutStatus("WORKOUT")
          this.intervalHandle = setInterval(this.tick, this.props.counterSpeed);
        }
    }

    restTick = () => {
        if (this.props.currentCount > 0) {
            this.props.CurrentCount(this.props.currentCount - 1)
        } else {
            clearInterval(this.restIntervalHandler)
            this.nextRound()
        }
    }

    switchToRest = () => {
        this.props.CountToWorkoutStatus("REST")
        this.props.CurrentCount(this.props.counterRestSeconds)
        clearInterval(this.intervalHandle)
        this.restIntervalHandler = setInterval(this.restTick, 1000);
    }

    tick = () => {
        if (this.props.currentCount < this.props.countToNumber){
            this.props.CurrentCount(this.props.currentCount + 1)
        } else if (this.props.counterRestSeconds > 0 && this.props.workoutStatus === "WORKOUT") {
            this.switchToRest()
        } else {
            this.nextRound()
        }
    }

    continueCount = () => {
        console.log("Countdown continued")
        this.props.TimerStatus("ACTIVE")
        if ( this.props.workoutStatus === "WORKOUT"){
            this.intervalHandle = setInterval(this.tick, this.props.counterSpeed);
        }
        else {
            this.restIntervalHandler = setInterval(this.restTick, 1000);
        }
    }

    stopCount = () => {
        console.log("Countdown stopped")
        if ( this.props.workoutStatus === "WORKOUT"){
            clearInterval(this.intervalHandle)
        } else {
            clearInterval(this.restIntervalHandler)
        }

        this.props.TimerStatus("STOPPED")
    }

    resetCount = () => {
        console.log("Countdown has been reset")
        this.props.CountToWorkoutStatus("NONE")
        this.props.ClearRounds()
        this.props.history.push('/CountForMe')
    }

    componentDidMount(){
        console.log("Countdown started")
        this.props.TimerStatus("ACTIVE")
        this.props.CountToWorkoutStatus("WORKOUT")
        this.props.CurrentCount(0)
        this.intervalHandle = setInterval(this.tick, this.props.counterSpeed);
    }

    render(){
        return (
            <div>
                <div>
                    { this.props.workoutStatus === "WORKOUT" &&
                        <div className="col d-flex justify-content-center">
                            <h1> {this.props.currentCount} </h1>
                        </div>
                    }
                    { this.props.workoutStatus === "REST" &&
                        <Timer
                            title="Rest"
                            minutes={Math.floor(this.props.currentCount / 60)}
                            seconds={this.props.currentCount % 60}
                            playSound={true}
                        />
                    }
                <br/><br/>
                <div className="row justify-content-md-center">
                    <div className="col d-flex justify-content-center">
                        <h2>{this.props.currentRound} / {this.props.counterRounds}</h2>
                    </div>
                </div>
                </div>
                <br/><br/><br/>
                <div className="row justify-content-md-center">
                <div className="col d-flex justify-content-center">
                    { this.props.timerStatus === "STOPPED" ? <button className="btn btn-success btn-lg" onClick={this.continueCount}>CONTINUE</button> : null }
                    { this.props.timerStatus === "ACTIVE" ? <button className="btn btn-danger btn-lg" onClick={this.stopCount}>STOP</button> : null }
                    { this.props.timerStatus === "STOPPED" ?  <button className="btn btn-warning btn-lg" onClick={this.resetCount}>RESET</button> : null }
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countToNumber: state.CountTo.countToNumber,
        counterRestSeconds: state.ChangeCounterRestTime.counterRestSeconds,
        counterRounds: state.CounterRounds.counterRounds,
        counterSpeed: state.CountSpeed.countSpeed,

        timerStatus: state.CounterTimerStatus.timerStatus,
        workoutStatus: state.CounterWorkoutStatus.countToWorkoutStatus,
        currentCount: state.CounterCurrentCount.currentCount,
        currentRound: state.CounterCurrentRound.currentRound,

    };
}

const actions = {
    TimerStatus,
    CountToWorkoutStatus,
    CurrentCount,
    ClearRounds,
    NextRound,
    ChangeMainPageTitle
  }

  export default connect(mapStateToProps,actions)(CountToClock);

