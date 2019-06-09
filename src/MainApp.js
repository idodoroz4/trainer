import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimerApp from './components/TimerApp/TimerApp';
import CountForMe from './components/CountForMeComponent/CountForMe'
import Wrapper from './components/Wrapper/Wrapper';

class MainApp extends Component {
  render() {
    return(
      <div>
        <Wrapper>
          { this.props.currentApp === "Interval" && <TimerApp /> }
          { this.props.currentApp === "CountForMe" && <CountForMe /> }
        </Wrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentApp: state.CurrentApp.currentApp
  }
}

export default connect(mapStateToProps)(MainApp);
