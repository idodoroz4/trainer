import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlusNumber, MinusNumber } from './CountToNumberActions';
import NumberCounter from '../GeneralComponents/NumberCounter';

class CountToNumber extends Component {
    minusNumber = () => {
        if (this.props.countToNumber > 1 ) {
            this.props.MinusNumber()
        }
    }
    render() {
        return (
            <NumberCounter
                title="Count To"
                num={this.props.countToNumber}
                minus={this.minusNumber}
                plus={this.props.PlusNumber}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countToNumber: state.CountTo.countToNumber
    }
}

const actions = {
    PlusNumber,
    MinusNumber
}

export default  connect(mapStateToProps,actions)(CountToNumber);