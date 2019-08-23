import React from 'react'

export const StartButton = (props) => {
    return (
        <div className="d-flex flex-row justify-content-center container body RowStartButtonDims">
            <button
                className="btn btn-success btn-lg"
                onClick={props.onClick}
                disabled={props.disabled}>
                {props.value}
            </button>
        </div>
    )
}