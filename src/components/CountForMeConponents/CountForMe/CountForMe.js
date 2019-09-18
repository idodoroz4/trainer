import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import CountSpeed from '../CountSpeed/CountSpeed';
import CounterRoundsInput from '../CounterRoundsInput/CounterRoundsInput';
import CountToNumber from '../CountToNumber/CountToNumber';
import { StartButton } from '../../GeneralComponents/StartButton';
import CounterRestTimer from '../CounterRestTimer/CounterRestTimer';
import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';

class CountForMe extends Component {
    componentDidMount(){
        this.props.ChangeMainPageTitle("Count For Me")
    }
    render(){
        return(
            <div className="container">
                <CountToNumber />
                <CountSpeed />
                <CounterRoundsInput />
                <CounterRestTimer />
                <NavLink to="CountToClock">
                    <StartButton value="START" />
              </NavLink>
            </div>
        );
    }
}

export default connect(null,{ChangeMainPageTitle})(CountForMe);