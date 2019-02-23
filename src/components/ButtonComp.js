import React, { Component } from 'react';

class ButtonComp extends Component {
    render() {
      return(
      <div style={{ marginLeft: 150 }}>
        <button className="btn btn-success" onClick={this.props.action}>{this.props.name}</button>
      </div>
       );
   }
 }

 export default ButtonComp;