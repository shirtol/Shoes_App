import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <div
                className={`button-container ${this.props.className}`}
                onClick={this.props.onBtnClick}
            >
                {this.props.buttonText}
            </div>
        );
    }
}
