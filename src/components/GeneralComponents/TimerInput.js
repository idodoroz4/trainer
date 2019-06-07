import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './Timer';
import UpDownButtons from './UpDownButtons';
import RowComponent from './RowComponent';


class TimerInput extends Component {
    /*
    This Component should get 5 props:
    1. Action for plusMinute
    2. Action for minusMinute
    3. Action for plusSecond
    4. Action for minusSecond
    5. seconds
    */

    minusSecond = () => {
        if (this.props.seconds === 0) {
            return
        } else {
            this.props.minusSecond()
        }
      }

    plusSecond = () => {
        // If the timer is at 59:59
        if (this.props.seconds === 60 * 59 + 59) {
            return
        } else {
            this.props.plusSecond()
        }
    }

    minusMinute = () => {
        if (this.props.seconds < 60) {
            return
        } else {
            this.props.minusMinute()
        }
    }

    plusMinute = () => {
        if (this.props.seconds >= 60 * 59) {
            return
        } else {
            this.props.plusMinute()
        }
    }
    render() {
        let min = Math.floor(this.props.seconds / 60)
        let sec = this.props.seconds % 60
        return (
            <RowComponent title={this.props.title}>
                <div className="d-flex justify-content-around">
                    <UpDownButtons upClick={this.plusMinute} downClick={this.minusMinute} />
                </div>
                <div className="d-flex justify-content-center rowPresentation">
                    <Timer minutes={min} seconds={sec}/>
                </div>
                <div className="d-flex justify-content-center">
                    <UpDownButtons upClick={this.plusSecond} downClick={this.minusSecond}/>
                </div>
            </RowComponent>
        );
    }
}

export default TimerInput;