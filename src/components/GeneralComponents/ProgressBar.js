import React from 'react';

export const ProgressBar = props => {
    return (
        <div className="progress">
            <div className={`progress-bar ${props.color}`} role="progressbar" style={{width: `${props.width}%`}}></div>
        </div>
    )
}