import React, { Component } from 'react';
import { connect } from 'react-redux';

class SpeedComponent extends Component {
    render(){
        return(
            <div className="d-flex flex-row justify-content-around container body formRowWidth">
                <div className="d-flex align-items-center formTitle">
                    <h3>Speed</h3>
                </div>
                <div className="d-flex flex-row">
                    <button
                        onClick={() => {  }}
                        className="btn btn-success btn-lg sidebarButton"
                    > Low </button>
                    <button
                        onClick={() => {  }}
                        className="btn btn-warning btn-lg sidebarButton"
                    > Medium </button>
                    <button
                        onClick={() => {  }}
                        className="btn btn-danger btn-lg sidebarButton"
                    > High </button>
                </div>
            </div>
        )
    }
}

export default SpeedComponent;