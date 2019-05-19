import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeMainPageTitle } from '../GeneralComponents/GeneralActions';
import styles from './styles.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center container">
                <div className="appTitle">
                    {this.props.mainPageTitle}
                </div>
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="sideBar">
                        {this.props.pageTitle}
                    </div>
                    <div className="body flex-fill">
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainPageTitle: state.ChangeMainPageTitle
    };
}

const actions = {
    ChangeMainPageTitle
}


export default connect(mapStateToProps,actions)(Wrapper);