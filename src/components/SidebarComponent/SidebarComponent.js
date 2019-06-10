import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ChangeMainPageTitle } from '../TitleComponent/TitleComponentActions';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sideBar d-flex flex-column">
                <NavLink to="IntervalWorkout">
                    <button className="btn btn-success btn-lg sidebarButton">
                        Interval Workout
                    </button>
                </NavLink>
                <NavLink to="CountForMe">
                    <button className="btn btn-primary btn-lg sidebarButton">
                        Count For Me
                    </button>
                </NavLink>

            </div>
        )
    }
}

const actions = {
    ChangeMainPageTitle
}

export default connect(null,actions)(SidebarComponent);

