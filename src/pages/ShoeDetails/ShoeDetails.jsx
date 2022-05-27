import React, { Component } from "react";

export default class ShoeDetails extends Component {
    product = this.props.location.item;

    render() {
        return (
            <div>
                <img src={this.product.imageUrl} alt="#"></img>
                <h2>{this.product.productName}</h2>
                <h4>{this.product.category}</h4>
                <h4>{this.product.size}</h4>
                <h5>{this.product.price}</h5>
                <p>{this.product.description}</p>
                <button>Back</button>
            </div>
        );
    }
}
