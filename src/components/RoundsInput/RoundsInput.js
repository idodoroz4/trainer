import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    PlusRound,
    MinusRound
} from './RoundsInputActions'

class RoundsInput extends Component {
    minusRound = () => {
        if (this.props.rounds > 1 ) {
            this.props.MinusRound()
        }
    }
    render() {
        return (
            <div className="d-flex flex-row justify-content-around container body formRowWidth">
                <div className="d-flex align-items-center formTitle">
                    <h3>Rounds</h3>
                </div>
                <div className="d-flex flex-row justify-content-center flex-grow">
                    <div className="d-flex justify-content-around">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.minusRound }>
                            <i className="minus icon"></i>
                        </button>
                    </div>
                    <div className="d-flex justify-content-center rowPresentation">
                        <h1 style={{ fontSize: 40 }}>
                            {this.props.rounds}
                        </h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.props.PlusRound}>
                            <i className="plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>

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