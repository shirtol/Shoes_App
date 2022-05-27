import React, { Component } from "react";
import Button from "../Button/Button";
import "./AddItemPopup.css";

export default class AddItemPopup extends Component {
    render() {
        return (
            this.props.isShown && (
                <div className="add-item-container">
                    <div className="add-item-popup-container">
                        <h3 className="add-item-title">
                            Please fill all the fields and submit your new
                            shoes!
                        </h3>
                        <input
                            placeholder="product name"
                            id="newShoesName"
                            value={this.props.productName}
                            onChange={this.props.onInputChange}
                        ></input>
                        <input
                            placeholder="product category"
                            id="newShoesCategory"
                            value={this.props.category}
                            onChange={this.props.onInputChange}
                        ></input>
                        <input
                            placeholder="product size"
                            id="newShoesSize"
                            value={this.props.size}
                            onChange={this.props.onInputChange}
                        ></input>
                        <input
                            placeholder="product price"
                            id="newShoesPrice"
                            value={this.props.price}
                            onChange={this.props.onInputChange}
                        ></input>
                        <input
                            placeholder="product image"
                            id="newShoesImage"
                            value={this.props.imageUrl}
                            onChange={this.props.onInputChange}
                        ></input>
                        <textarea
                            className="description-container"
                            placeholder="product description"
                            id="newShoesDescription"
                            value={this.props.description}
                            onChange={this.props.onInputChange}
                        ></textarea>
                        <div className="buttons-container">
                            <Button
                                buttonText="Cancel"
                                onBtnClick={this.props.onCancelClicked}
                            ></Button>
                            <Button
                                buttonText="Submit"
                                onBtnClick={this.props.onAddClicked}
                            ></Button>
                            {/* <button onClick={this.props.onCancelClicked}>
                                Cancel
                            </button>
                            <button onClick={this.props.onAddClicked}>
                                Submit
                            </button> */}
                        </div>
                    </div>
                </div>
            )
        );
    }
}
