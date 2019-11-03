import React, { Component } from 'react';
import { connect } from 'react-redux';
import RowComponent from '../../GeneralComponents/RowComponent';
import { ChangeSpeed, UseRandomSpeed, ChangeRandomRange } from './CountSpeedActions';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

class SpeedComponent extends Component {
    handleChange = (event, newValue) => {
        console.log(newValue);
        console.log(newValue[0])
        console.log(newValue[1])
    }
    render(){
        return(
            <RowComponent title="Speed">
                <button
                    className={"btn btn-success randomSpeed"}
                    onClick={() => this.props.UseRandomSpeed()}>
                    {this.props.useRandomSpeed ? "Manual" : "Random"}
                </button>
                { this.props.useRandomSpeed &&
                    <div>
                        <Typography id="range-slider" gutterBottom>
                            {this.props.countRandomRange[0]} - {this.props.countRandomRange[1]} seconds
                        </Typography>
                        <Slider
                            style={{flex: 1, width: "200px"}}
                            value={this.props.countRandomRange}
                            onChange={(event, newValue) => this.props.ChangeRandomRange(newValue) }
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            max={10}
                            min={1}
                        />
                    </div>
                }
                { !this.props.useRandomSpeed &&
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton
                            className="primary speedButton"
                            value={1}
                            onClick={() => this.props.ChangeSpeed(1000)}>
                            1 Sec
                        </ToggleButton>
                        <ToggleButton
                            className="primary speedButton"
                            value={5}
                            onClick={() => this.props.ChangeSpeed(5 * 1000) }>
                            5 Sec
                        </ToggleButton>
                        <ToggleButton
                            className="primary speedButton"
                            value={10}
                            onClick={() => this.props.ChangeSpeed(10 * 1000)}>
                            10 Sec
                        </ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                }
            </RowComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countSpeed: state.CountSpeed.countSpeed,
        useRandomSpeed: state.IsRandomSpeed.useRandomSpeed,
        countRandomRange: state.ChangeRandomRange.countRandomRange
    }
}

const actions = {
    ChangeSpeed,
    UseRandomSpeed,
    ChangeRandomRange
}

export default connect(mapStateToProps,actions)(SpeedComponent);