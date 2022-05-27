import React, { Component } from "react";
import "./AddItemBtn.css";

export default class AddItemBtn extends Component {
    render() {
        return (
            <i
                className="fa-solid fa-circle-plus fa-3x"
                onClick={this.props.onAddClicked}
            ></i>
        );
    }
}
