import React, { Component } from 'react';
import TitleComponent  from '../TitleComponent/TitleComponent';
import  SidebarComponent from '../SidebarComponent/SidebarComponent';
import styles from './styles.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center container">
                <TitleComponent />
                <div className="d-flex flex-row bd-highlight mb-3">
                    <SidebarComponent />
                    <div className="body flex-fill">
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }
}


export default Wrapper;