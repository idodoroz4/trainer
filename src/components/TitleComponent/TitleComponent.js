import React, { Component } from 'react';
import { connect } from 'react-redux';

class TitleComponent extends Component{
    render() {
        return(
            <div className="appTitle">
                <h1>{this.props.mainPageTitle.mainPageTitle}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainPageTitle: state.MainPageTitle
    };
}

export default connect(mapStateToProps)(TitleComponent);

