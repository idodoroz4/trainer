import React, { Component } from 'react';
import { connect } from 'react-redux';

class TitleComponent extends Component{
    render() {
        return(
            <div className="appTitle">
                {this.props.mainPageTitle.mainPageTitle}
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

