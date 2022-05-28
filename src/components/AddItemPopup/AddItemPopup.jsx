import React, { Component } from "react";
import ShoesForm from "../ShoesForm/ShoesForm";
import "./AddItemPopup.css";
import * as validation from "../../utils/validation.js";

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

    isUserInputValid = () =>
        validation.isValidCategory(this.state.category) &&
        validation.isValidImage(this.state.imageUrl) &&
        validation.isValidPrice(this.state.price) &&
        validation.isValidProductName(this.state.productName) &&
        validation.isValidSize(this.state.size);

    render() {
        return (
            this.props.isShown && (
                <div className="add-item-container">
                    <div className="add-item-popup-container">
                        <h3 className="add-item-title">
                            Please fill all the fields and submit your new shoes
                        </h3>
                        <ShoesForm
                            disable={!this.isUserInputValid()}
                            onInputChange={this.onInputChange}
                            onSaveChanges={this.saveNewItem}
                            onDiscardChanges={this.resetNewShoesData}
                            item={this.state}
                        ></ShoesForm>
                    </div>
                </div>
            )
        );
    }
}
