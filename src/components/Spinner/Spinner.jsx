import React, { Component } from "react";
import "./Spinner.css";

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner-container">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}
