import React, { Component } from "react";
import "./UpdateItemDetails.css";

export default class UpdateItemDetails extends Component {
    render() {
        return (
            <div className="update-item-details-form">
                <input
                    placeholder="product name"
                    id="shoesName"
                    value={this.props.productName}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="product category"
                    id="shoesCategory"
                    value={this.props.category}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="product size"
                    id="shoesSize"
                    value={this.props.size}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="product price"
                    id="shoesPrice"
                    value={this.props.price}
                    onChange={this.props.onInputChange}
                ></input>
                <input
                    placeholder="product image"
                    id="shoesImage"
                    value={this.props.imageUrl}
                    onChange={this.props.onInputChange}
                ></input>
                <textarea
                    placeholder="product description"
                    id="shoesDescription"
                    value={this.props.description}
                    onChange={this.props.onInputChange}
                ></textarea>
            </div>
        );
    }
}
