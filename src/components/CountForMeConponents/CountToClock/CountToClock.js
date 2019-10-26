import React, { Component } from 'react';
import { connect } from 'react-redux';
import "regenerator-runtime/runtime";

import Timer from '../../GeneralComponents/Timer'
import { BeepSound } from '../../GeneralComponents/Sounds'
import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';
import { ProgressBar } from '../../GeneralComponents/ProgressBar';
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
          clearInterval(this.intervalHandle)
          BeepSound.setVolume(0.8)
          this.triggerTick()
        }
    }

    restTick = () => {
        if (this.props.currentCount > 0) {
            this.props.CurrentCount(this.props.currentCount - 1)
            BeepSound.play()
        } else {
            clearInterval(this.restIntervalHandler)
            this.nextRound()
        }
    }

    switchToRest = () => {
        this.props.CountToWorkoutStatus("REST")
        this.props.CurrentCount(this.props.counterRestSeconds)
        clearInterval(this.intervalHandle)
        BeepSound.setVolume(0.4)
        this.restIntervalHandler = setInterval(this.restTick, 1000);
    }

    triggerTick = () => {
        if (this.props.useRandomSpeed) { // check also if max and min are not equal
            this.randomTick()
        } else {
            this.intervalHandle = setInterval(this.tick, this.props.counterSpeed);
        }
    }

    timeout = (ms) => { return new Promise(callback => this.timeoutHandler = setTimeout(callback, ms))};

    async sleep(callback, ms) {
        await this.timeout(ms);
        callback()
        return true
    }

    tick = () => {
        if (this.props.currentCount < this.props.countToNumber){
            this.props.CurrentCount(this.props.currentCount + 1)
            BeepSound.play()
        } else if (this.props.counterRestSeconds > 0 && this.props.workoutStatus === "WORKOUT") {
            this.switchToRest()
        } else {
            this.nextRound()
        }

        // When Count is over go to the next round or rest time
        // In case the count interval is long ( more than 1 Sec ) we don't want to wait
        // for a long time to pass to the next round or rest
        setTimeout(() => {
            if (this.props.currentCount === this.props.countToNumber) {
                if (this.props.counterRestSeconds > 0 && this.props.workoutStatus === "WORKOUT") {
                    this.switchToRest()
                } else {
                    this.nextRound()
                }
            }
        }, 1500)
    }

    async randomTick() {
        const minRange = this.props.countRandomRange[0];
        const maxRange = this.props.countRandomRange[1];
        const waitUtilCount = Math.round(Math.random() * (maxRange - minRange)) + minRange;
        console.log("Wait: ",waitUtilCount, " Seconds")
        await this.sleep(this.tick, waitUtilCount * 1000);
        if (this.props.currentCount < this.props.countToNumber) {
            this.randomTick()
        }
    }

    continueCount = () => {
        console.log("Countdown continued")
        this.props.TimerStatus("ACTIVE")
        if ( this.props.workoutStatus === "WORKOUT"){
            this.triggerTick()
        }
        else {
            this.restIntervalHandler = setInterval(this.restTick, 1000);
        }
    }

    stopCount = () => {
        console.log("Countdown stopped")
        if ( this.props.workoutStatus === "WORKOUT"){
            clearInterval(this.intervalHandle)
            clearTimeout(this.timeoutHandler)
        } else {
            clearInterval(this.restIntervalHandler)
        }

        this.props.TimerStatus("STOPPED")
    }

    resetCount = () => {
        console.log("Countdown has been reset")
        this.props.CountToWorkoutStatus("NONE")
        this.props.TimerStatus("STOPPED")
        this.props.CurrentCount(0)
        this.props.ClearRounds()
        clearInterval(this.intervalHandle)
        clearInterval(this.restIntervalHandler)
        clearTimeout(this.timeoutHandler)
        this.props.history.push('/CountForMe')
    }

    componentDidMount(){
        console.log("Countdown started")
        this.props.TimerStatus("ACTIVE")
        this.props.CountToWorkoutStatus("WORKOUT")
        this.props.CurrentCount(0)
        if (this.props.useRandomSpeed) { // check also if max and min are not equal
            this.randomTick()
        } else {
            this.intervalHandle = setInterval(this.tick, this.props.counterSpeed);
        }
    }

    render(){
        return (
            <div>
                <div>
                    { this.props.workoutStatus === "WORKOUT" &&
                        <div className="col d-flex justify-content-center">
                            <h1> {this.props.currentCount} / { this.props.countToNumber} </h1>
                        </div>
                    }
                    { this.props.workoutStatus === "REST" &&
                        <Timer
                            title="Rest"
                            minutes={Math.floor(this.props.currentCount / 60)}
                            seconds={this.props.currentCount % 60}
                        />
                    }
                    <br/><br/>
                    { this.props.workoutStatus === "WORKOUT" &&
                        <ProgressBar
                            color="bg-info"
                            width={`${(this.props.currentCount)/this.props.countToNumber*100}`}
                        />
                    }
                    { this.props.workoutStatus === "REST" &&
                        <ProgressBar
                            color="bg-warning"
                            width={`${100-(this.props.currentCount)/this.props.counterRestSeconds*100}`}
                        />
                    }
                    <br/><br/>
                    <div className="row justify-content-md-center">
                        <div className="col d-flex justify-content-center">
                            <h2>{this.props.currentRound} / {this.props.counterRounds}</h2>
                        </div>
                    </div>

                    <br/><br/>
                    <ProgressBar
                        color="bg-success"
                        width={`${(this.props.currentRound)/this.props.counterRounds*100}`}
                    />
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
        useRandomSpeed: state.IsRandomSpeed.useRandomSpeed,
        countRandomRange: state.ChangeRandomRange.countRandomRange,

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

