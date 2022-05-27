import React, { Component } from "react";
import "./DeleteItemPopup.css";

export default class DeleteItemPopup extends Component {
    render() {
        return (
            this.props.isShown && (
                <div className="delete-item-container">
                    <div className="delete-item-popup-container">
                        <h3>Are you sure you want to delete this item?</h3>

                        <div className="buttons-container">
                            <button onClick={this.props.onCancelClicked}>
                                Cancel
                            </button>
                            <button onClick={this.props.onApproveClicked}>
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )
        );
    }
}
