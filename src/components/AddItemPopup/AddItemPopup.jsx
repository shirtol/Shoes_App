import React, { Component } from "react";
import "./AddItemPopup.css";

export default class AddItemPopup extends Component {
    render() {
        return (
            this.props.isShown && (
                <div className="add-item-container">
                    <div className="add-item-popup-container">
                        <h3>
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
                        <input
                            placeholder="product description"
                            id="newShoesDescription"
                            value={this.props.description}
                            onChange={this.props.onInputChange}
                        ></input>
                        <div className="buttons-container">
                            <button onClick={this.props.onCancelClicked}>
                                Cancel
                            </button>
                            <button onClick={this.props.onAddClicked}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )
        );
    }
}
