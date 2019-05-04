import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from '../GeneralComponents/Timer';
import UpDownButtons from '../GeneralComponents/UpDownButtons';
import {
    IntervalMinPlus,
    IntervalMinMinus,
    IntervalSecPlus,
    IntervalSecMinus,
    RestMinPlus,
    RestMinMinus,
    RestSecPlus,
    RestSecMinus,
} from './TimerInputActions';

class TimerInput extends Component {

    minusSecond = () => {
        if (this.props.title === 'Interval time') {
            if (this.props.intervalTime.intervalSeconds === 0) {
                return
            } else {
                this.props.IntervalSecMinus()
            }
        } else if (this.props.title === 'Rest time') {
            if (this.props.restTime.restSeconds === 0) {
                return
            } else {
                this.props.RestSecMinus()
            }
        }

      }

    plusSecond = () => {
        if (this.props.title === 'Interval time') {
            if (this.props.intervalTime.intervalSeconds === 60 * 59 + 59) {
                return
            } else {
                this.props.IntervalSecPlus()
            }
        } else if (this.props.title === 'Rest time') {
            if (this.props.restTime.restSeconds === 60 * 59 + 59 ){
                return
            } else {
                this.props.RestSecPlus()
            }
        }
    }

    minusMinute = () => {
        if (this.props.title === 'Interval time') {
            if (this.props.intervalTime.intervalSeconds < 60 ) {
                return
            } else {
                this.props.IntervalMinMinus()
            }
        } else if (this.props.title === 'Rest time') {
            if (this.props.restTime.restSeconds < 60) {
                return
            } else {
                this.props.RestMinMinus()
            }
        }
    }

    plusMinute = () => {
        if (this.props.title === 'Interval time') {
            if (this.props.intervalTime.intervalSeconds >= 60 * 59 ) {
                return
            } else {
                this.props.IntervalMinPlus()
            }
        } else if (this.props.title === 'Rest time') {
            if (this.props.restTime.restSeconds >= 60 * 59 ) {
                return
            } else {
                this.props.RestMinPlus()
            }
        }
    }
    render() {
        let min = 0
        let sec = 0
        if (this.props.title === 'Interval time') {
            min = Math.floor(this.props.intervalTime.intervalSeconds / 60)
            sec = this.props.intervalTime.intervalSeconds % 60
        } else if (this.props.title === 'Rest time') {
            min = Math.floor(this.props.restTime.restSeconds / 60)
            sec = this.props.restTime.restSeconds % 60
        }
        return (
            <div className="d-flex flex-row justify-content-around container body formRowWidth">
                <div className="d-flex align-items-center formTitle">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="d-flex flex-row justify-content-center flex-grow">
                    <div className="d-flex justify-content-around">
                        <UpDownButtons upClick={this.plusMinute} downClick={this.minusMinute} />
                    </div>
                    <div className="d-flex justify-content-center rowPresentation">
                        <Timer minutes={min} seconds={sec}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <UpDownButtons upClick={this.plusSecond} downClick={this.minusSecond}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        intervalTime: state.ChangeIntervalTime,
        restTime: state.ChangeRestTime
    };
}

const actions = {
    IntervalMinPlus,
    IntervalMinMinus,
    IntervalSecPlus,
    IntervalSecMinus,
    RestMinPlus,
    RestMinMinus,
    RestSecPlus,
    RestSecMinus,
}

export default connect(mapStateToProps,actions)(TimerInput);