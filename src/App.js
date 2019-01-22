import React, { Component } from 'react';
import ButtonComp from './components/ButtonComp'
import Timer from './components/Timer'
import TimerInput from './components/inputComponents/TimerInput'
import RoundInput from './components/inputComponents/RoundsInput'
import './App.css';

  class App extends Component {
     render() {
        return (
         <div>
          <TimerInput/>
          <RoundInput/>
          <Timer/>
          <ButtonComp/>
        </div>
       );
     }
   }

export default App;
