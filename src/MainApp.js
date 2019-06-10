import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import TimerApp from './components/TimerApp/TimerApp';
import CountForMe from './components/CountForMeComponent/CountForMe'
import Wrapper from './components/Wrapper/Wrapper';

class MainApp extends Component {
  render() {
    return(
      <div>
        <Wrapper>
          <Route exact={true} path="/IntervalWorkout" component={TimerApp} />
          <Route exact={true} path="/CountForMe" component={CountForMe} />
        </Wrapper>
      </div>
    )
  }
}

export default MainApp;
