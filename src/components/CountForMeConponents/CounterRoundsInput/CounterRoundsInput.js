import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CounterPlusRound, CounterMinusRound} from './CounterRoundsInputActions';
import NumberCounter from '../../GeneralComponents/NumberCounter';

class CounterRoundsInput extends Component {
    render () {
        return (
            <NumberCounter
                title="Rounds"
                num={this.props.counterRounds}
                minus={this.props.counterRounds > 1 ? this.props.CounterMinusRound : () => {return this.props.counterRounds}}
                plus={this.props.CounterPlusRound}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterRounds: state.CounterRounds.counterRounds
    }
}

const actions = {
    CounterPlusRound,
    CounterMinusRound
}

export default connect(mapStateToProps,actions)(CounterRoundsInput);