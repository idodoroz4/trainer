import React, { Component } from 'react';
import Timer from '../Timer';


const UpDownButtons = (props) => {
    return (
        <div className="btn-group-vertical">
            <button type="button" className="btn btn-outline-secondary" onClick={props.upClick}>
                <i className="chevron up icon "></i>
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={props.downClick}>
                <i className="chevron down icon"></i>
            </button>
        </div>
    )
}

class TimerInput extends Component {
    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <div className="row justify-content-md-center">

                    <div className="col d-flex justify-content-center">
                        <h1>{this.props.title}</h1>
                    </div>

                </div>
                <br />
                <div className="row justify-content-md-center">

                    <div className="col d-flex justify-content-center">
                        <div className="continer">
                            <div className="row justify-content-md-center">

                                <UpDownButtons upClick={this.props.plusMin} downClick={this.props.minusMin} />
                                <Timer minutes={this.props.minutes} seconds={this.props.seconds}/>
                                <UpDownButtons upClick={this.props.plusSec} downClick={this.props.minusSec}/>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default TimerInput;