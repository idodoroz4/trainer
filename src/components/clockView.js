import React from 'react'


const ClockView = (props) => {
    return (
        <div>
            <h1 style={{ fontSize: 150 }}>
            {props.minutes}:{props.seconds}
            </h1>
        </div>
    );
}

export default ClockView;