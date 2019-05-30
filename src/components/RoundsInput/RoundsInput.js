import React, { Component } from 'react';
import { connect } from 'react-redux';
import {PlusRound, MinusRound} from './RoundsInputActions';
import NumberCounter from '../GeneralComponents/NumberCounter';

class RoundsInput extends Component {
    minusRound = () => {
        if (this.props.rounds > 1 ) {
            this.props.MinusRound()
        }
    }
    render() {
        return (
            <NumberCounter
                title="Rounds"
                num={this.props.rounds}
                minus={this.minusRound}
                plus={this.props.PlusRound}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rounds: state.RoundsCount.rounds
    }
}

const actions = {
    PlusRound,
    MinusRound
}

export default  connect(mapStateToProps,actions)(RoundsInput);