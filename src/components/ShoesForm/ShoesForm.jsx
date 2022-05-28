import React, { Component } from "react";
import Button from "../Button/Button";
import "./ShoesForm.css";

export default class ShoesForm extends Component {
    render() {
        return (
            <div className="update-item-details-form">
                <input
                    placeholder="Name"
                    id="productName"
                    value={this.props.item.productName}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Category"
                    id="category"
                    value={this.props.item.category}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Size"
                    id="size"
                    value={this.props.item.size}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Price"
                    id="price"
                    value={this.props.item.price}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Image"
                    id="imageUrl"
                    value={this.props.item.imageUrl}
                    onChange={this.props.onInputChange}
                ></input>
                <textarea
                    placeholder="Description"
                    id="description"
                    value={this.props.item.description}
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
                </div>
            </div>
        );
    }
}
