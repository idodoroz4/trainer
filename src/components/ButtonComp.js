import React, { Component } from 'react';

class ButtonComp extends Component {
    render() {
      return(
      <div style={{ marginLeft: 150 }}>
        <button onClick={this.props.action} >{this.props.name}</button>
      </div>
       );
   }
 }

 export default ButtonComp;