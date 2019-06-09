import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeMainPageTitle } from '../TitleComponent/TitleComponentActions';
import { ChangeCurrentApp } from './SidebarComponentActions';

class SidebarComponent extends Component {
    changeToInterval() {
        this.props.ChangeMainPageTitle("Interval Workout")
        this.props.ChangeCurrentApp("Interval")
    }
    changeToCountForMe() {
        this.props.ChangeMainPageTitle("Count For Me")
        this.props.ChangeCurrentApp("CountForMe")
    }
    render() {
        return (
            <div className="sideBar d-flex flex-column">
                <button
                    onClick={() => { this.changeToInterval() }}
                    className="btn btn-success btn-lg sidebarButton"
                > Interval Workout </button>
                <button
                    onClick={() => { this.changeToCountForMe() }}
                    className="btn btn-primary btn-lg sidebarButton"
                > Count For Me </button>
            </div>
        )
    }
}

const actions = {
    ChangeCurrentApp,
    ChangeMainPageTitle
}

export default connect(null,actions)(SidebarComponent);

