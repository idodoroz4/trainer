import React from 'react'


const RowComponent = (props) => {
    return (
        <div className="d-flex flex-row justify-content-around container body formRowWidth">
            <div className="rowTitleWidth d-flex align-items-center formTitle">
                <h3>{props.title}</h3>
            </div>
            <div className="d-flex flex-row justify-content-center flex-grow RowContentWidth">
                {props.children}
            </div>
        </div>
    )
}

export default RowComponent;