import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import IntervalRoundsInput from '../IntervalRoundsInput/IntervalRoundsInput';
import Timer from '../../GeneralComponents/Timer';
import IntervalTimer from '../IntervalTimer/IntervalTimer';
import IntervalRestTimer from '../IntervalRestTimer/IntervalRestTimer';
import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';
import { StartButton } from '../../GeneralComponents/StartButton';


class TimerApp extends Component {

  componentDidMount(){
    this.props.ChangeMainPageTitle("Interval Workout")
  }

  render() {
    return (
      <div className="container">
        <div>
            <div>
              <IntervalTimer />
              <IntervalRestTimer />
              <IntervalRoundsInput />
              <NavLink to="IntervalClock">
                <StartButton
                  disabled={this.props.intervalTime === 0}
                  onClick={() => console.log("clicked!")}
                  value="START"
                />
              </NavLink>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      intervalTime: state.ChangeIntervalTime.intervalSeconds,
  }
}

export default connect(mapStateToProps, {ChangeMainPageTitle})(TimerApp);
