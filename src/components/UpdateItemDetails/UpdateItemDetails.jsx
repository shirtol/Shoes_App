import React, { Component } from "react";
import Button from "../Button/Button";
import "./UpdateItemDetails.css";

export default class UpdateItemDetails extends Component {
    render() {
        return (
            <div className="update-item-details-form">
                <input
                    placeholder="name"
                    id="productName"
                    value={this.props.productName}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="category"
                    id="category"
                    value={this.props.category}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="size"
                    id="size"
                    value={this.props.size}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="price"
                    id="price"
                    value={this.props.price}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="image"
                    id="imageUrl"
                    value={this.props.imageUrl}
                    onChange={this.props.onInputChange}
                ></input>
                <textarea
                    placeholder="description"
                    id="description"
                    value={this.props.description}
                    onChange={this.props.onInputChange}
                ></textarea>
                <div className="item-details-btn-container">
                    <Button
                        buttonText="Save"
                        onBtnClick={this.props.onSaveChanges}
                    ></Button>
                    <Button
                        buttonText="Discard"
                        onBtnClick={this.props.onDiscardChanges}
                    ></Button>
                    {/* <button onClick={this.props.onSaveChanges}>
                        Save Changes
                    </button>
                    <button onClick={this.props.onDiscardChanges}>
                        Discard Changes
                    </button> */}
                </div>
            </div>
        );
    }
}
