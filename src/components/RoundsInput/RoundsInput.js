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
    /*
     <div className="container" >
                <br /><br /><br />
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1> Rounds </h1>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col d-flex justify-content-md-center">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.minusRound }>
                            <i className="minus icon"></i>
                        </button>
                        <div style={this.props.rounds > 9 ? { paddingLeft: 120, paddingRight: 120 } : { paddingLeft: 145, paddingRight: 145 }} >
                            <h1 style={{ fontSize: 80 }}>
                                {this.props.rounds}
                            </h1>
                        </div>
                        <button type="button" className="btn btn-outline-secondary" onClick={this.props.PlusRound}>
                            <i className="plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>
    */
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