import React from 'react';

const UpDownButtons = (props) => {
    return (
        <div className="btn-group-vertical">
            <button type="button" className="btn btn-outline-secondary" onClick={props.upClick}>
                <i className="chevron up icon "></i>
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={props.downClick}>
                <i className="chevron down icon"></i>
            </button>
        </div>
    )
}

export default UpDownButtons;
