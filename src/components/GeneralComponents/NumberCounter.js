import React from 'react'

/* Props:
    title - Title of component
    num - Number to show
    minus - callback for the minus button
    plus - callback for the plus button
*/
const NumberCounter = (props) => {
    return (
        <div className="d-flex flex-row justify-content-around container body formRowWidth">
            <div className="d-flex align-items-center formTitle">
                <h3>{props.title}</h3>
            </div>
            <div className="d-flex flex-row justify-content-center flex-grow">
                <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-outline-secondary" onClick={props.minus }>
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
            </div>
        </div>
    )
}

export default NumberCounter;