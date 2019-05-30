import React from 'react'
import RowComponent from '../GeneralComponents/RowComponent';

/* Props:
    title - Title of component
    num - Number to show
    minus - callback for the minus button
    plus - callback for the plus button
*/
const NumberCounter = (props) => {
    return (
        <RowComponent title={props.title}>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-secondary" onClick={props.minus}>
                    <i className="minus icon"></i>
                </button>
            </div>
            <div className="d-flex justify-content-center rowPresentation">
                <h1 style={{ fontSize: 60 }}>
                    {props.num}
                </h1>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-secondary" onClick={props.plus}>
                    <i className="plus icon"></i>
                </button>
            </div>
        </RowComponent>
    )
}

export default NumberCounter;