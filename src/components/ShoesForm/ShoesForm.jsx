import React, { Component } from "react";
import Button from "../Button/Button";
import "./ShoesForm.css";

export default class ShoesForm extends Component {
    render() {
        return (
            <div className={`update-item-details-form ${this.props.className}`}>
                <input
                    placeholder="Name (3-30 chars)"
                    id="productName"
                    value={this.props.item.productName}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Category (up to 30 chars)"
                    id="category"
                    value={this.props.item.category}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Size (1-3 chars)"
                    id="size"
                    value={this.props.item.size}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Price (1-10 chars)"
                    id="price"
                    value={this.props.item.price}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="Image (valid image url)"
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
                        disable={this.props.disable}
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
