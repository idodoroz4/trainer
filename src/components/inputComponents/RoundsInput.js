import React, { Component } from 'react';


class RoundsInput extends Component {
    render() {
        return (
            <div style={{marginLeft:100}}>
                <h3>number of rounds</h3>
                <input type="number" required />
            </div>
        );
    }
}

export default RoundsInput;