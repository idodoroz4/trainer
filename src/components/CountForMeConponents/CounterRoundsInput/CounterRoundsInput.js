import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CounterPlusRound, CounterMinusRound} from './CounterRoundsInputActions';
import NumberCounter from '../../GeneralComponents/NumberCounter';

class CounterRoundsInput extends Component {
    render () {
        return (
            <NumberCounter
                title="Rounds"
                num={this.props.CounterRounds}
                minus={this.props.CounterRounds > 1 ? this.props.CounterMinusRound : () => {return this.props.CounterRounds}}
                plus={this.props.CounterPlusRound}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        CounterRounds: state.CounterRoundsCount.CounterRounds
    }
}

const actions = {
    CounterPlusRound,
    CounterMinusRound
}

export default connect(mapStateToProps,actions)(CounterRoundsInput);