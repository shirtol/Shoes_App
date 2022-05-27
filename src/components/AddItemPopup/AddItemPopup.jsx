import React, { Component } from "react";
import UpdateItemDetails from "../UpdateItemDetails/UpdateItemDetails";
import "./AddItemPopup.css";

export default class AddItemPopup extends Component {
    state = {
        productName: "",
        price: "",
        category: "",
        description: "",
        size: "",
        imageUrl: "",
    };

    onInputChange = ({ target }) =>
        this.setState({ [target.id]: target.value });

    resetNewShoesData = () => {
        this.setState({
            productName: "",
            price: "",
            category: "",
            description: "",
            size: "",
            imageUrl: "",
        });
        this.props.onCancelClicked();
    };

    saveNewItem = () => {
        this.props.onAddClicked(this.state);
        this.resetNewShoesData();
    };

    render() {
        return (
            this.props.isShown && (
                <div className="add-item-container">
                    <div className="add-item-popup-container">
                        <h3 className="add-item-title">
                            Please fill all the fields and submit your new
                            shoes!
                        </h3>
                        <UpdateItemDetails
                            onInputChange={this.onInputChange}
                            onSaveChanges={this.saveNewItem}
                            onDiscardChanges={this.resetNewShoesData}
                            item={this.state}
                        ></UpdateItemDetails>
                    </div>
                </div>
            )
        );
    }
}
