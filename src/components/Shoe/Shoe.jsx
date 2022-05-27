import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Shoe.css";

export default class Shoe extends Component {
    render() {
        return (
            <div className="shoe-container">
                <Link
                    to={{
                        pathname: `${this.props.catalogLocation}/${this.props.item.id}`,
                        item: this.props.item,
                    }}
                >
                    <div className="shoe-item-container">
                        <img
                            className="shoe-img"
                            alt={this.props.item.productName}
                            src={this.props.item.imageUrl}
                        ></img>
                        <h2>{this.props.item.productName}</h2>
                        <h4>{this.props.item.price}</h4>
                    </div>
                </Link>
                <i
                    className="fa-solid fa-trash-can fa-2x"
                    onClick={this.props.onDeleteIconClicked}
                ></i>
            </div>
        );
    }
}
