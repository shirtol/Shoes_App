import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <div
                className={`button-container ${this.props.className}`}
                onClick={this.props.onBtnClick}
                disabled={this.props.disable}
            >
                {this.props.buttonText}
            </div>
        );
    }
}
