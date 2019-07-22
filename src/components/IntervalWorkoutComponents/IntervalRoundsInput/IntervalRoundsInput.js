import React, { Component } from 'react';
import { connect } from 'react-redux';
import {IntervalPlusRound, IntervalMinusRound} from './IntervalRoundsInputActions';
import NumberCounter from '../../GeneralComponents/NumberCounter';

class RoundsInput extends Component {
    render() {
        return (
            <NumberCounter
                title="Rounds"
                num={this.props.intervalRounds}
                minus={this.props.intervalRounds > 1 ? this.props.IntervalMinusRound : () => {return this.props.intervalRounds}}
                plus={this.props.IntervalPlusRound}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        intervalRounds: state.IntervalRoundsCount.intervalRounds
    }
}

const actions = {
    IntervalPlusRound,
    IntervalMinusRound
}

export default connect(mapStateToProps,actions)(RoundsInput);