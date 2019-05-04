import React, { Component } from 'react';
import TimerApp from './components/TimerApp/TimerApp';
import Wrapper from './components/Wrapper/Wrapper';

const MainApp = () => {
    return(
      <div>
        <Wrapper pageTitle="asd">
          <TimerApp />
        </Wrapper>
      </div>
    )
}

export default MainApp;
