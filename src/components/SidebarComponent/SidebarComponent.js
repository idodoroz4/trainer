import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeMainPageTitle } from '../TitleComponent/TitleComponentActions';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sideBar d-flex flex-column">
                <button
                    onClick={() => { this.props.ChangeMainPageTitle("Interval Workout") }}
                    className="btn btn-success btn-lg sidebarButton"
                > Interval Workout </button>
                <button
                    onClick={() => { this.props.ChangeMainPageTitle("Count For Me") }}
                    className="btn btn-primary btn-lg sidebarButton"
                > Count For Me </button>
            </div>
        )
    }
}

export default connect(null,{ChangeMainPageTitle})(SidebarComponent);

