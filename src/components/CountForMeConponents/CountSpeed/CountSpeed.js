import React, { Component } from 'react';
import { connect } from 'react-redux';
import RowComponent from '../../GeneralComponents/RowComponent';
import { ChangeSpeed } from './CountSpeedActions';
import { Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class SpeedComponent extends Component {
    render(){
        return(
            <RowComponent title="Speed">
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton
                        className="btn-primary speedButton"
                        value={1}
                        onClick={() => this.props.ChangeSpeed(1000)}>
                        1 Sec
                    </ToggleButton>
                    <ToggleButton
                        className="btn-primary speedButton"
                        value={5}
                        onClick={() => this.props.ChangeSpeed(5 * 1000) }>
                        5 Sec
                    </ToggleButton>
                    <ToggleButton
                        className="btn-primary speedButton"
                        value={10}
                        onClick={() => this.props.ChangeSpeed(10 * 1000)}>
                        10 Sec
                    </ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </RowComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countSpeed: state.CountSpeed.countSpeed
    }
}

export default connect(mapStateToProps,{ChangeSpeed})(SpeedComponent);