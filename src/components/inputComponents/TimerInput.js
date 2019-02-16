import React, { Component } from 'react';
import Timer from '../Timer';


const UpDownButtons = (props) => {
    return (
        <div className="ui vertical icon buttons">
            <button className="ui button" onClick={props.upClick}>
                <i className="chevron up icon "></i>
            </button>
            <button className="ui button" onClick={props.downClick}>
                <i className="chevron down icon"></i>
            </button>
        </div>
    )
}

class TimerInput extends Component {
    render() {
        return (
            <div className="ui four column grid">
                <div className="row" />
                <div className="row">
                    <div className="six wide column" />
                    <div className="four wide column" style={{marginLeft: '70px'}}>
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="six wide column" />
                    <div className="four wide column">
                        <div className="ui horizontal statistic">
                            <div className="label" style={{marginRight: '10px'}}>
                                <UpDownButtons upClick={this.props.plusMin} downClick={this.props.minusMin} />
                            </div>
                            <div className="value">
                                <Timer minutes={this.props.minutes} seconds={this.props.seconds}/>
                            </div>
                            <div className="label">
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