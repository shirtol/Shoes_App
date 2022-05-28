import React, { Component } from "react";
import ShoesForm from "../../components/ShoesForm/ShoesForm";
import "./ShoeDetails.css";
import { CatalogApi } from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";
import NotFound from "../../components/NotFound/NotFound";
import * as validation from "../../utils/validation.js";

export default class ShoeDetails extends Component {
    product = this.props.location.item;
    updateItemFunc = this.props.location.onUpdateItem;

    state = { shoeItem: this.product, isLoading: true };

    componentDidMount = async () => {
        if (this.props.location.item === undefined) {
            const id = this.props.location.pathname.split("/")[2];
            const { data } = await CatalogApi.get(`/${id}`);
            this.setState({ shoeItem: data, isLoading: false });
        }
        this.setState({ isLoading: false });
    };

    onInputChange = ({ target }) =>
        this.setState((prevState) => ({
            shoeItem: { ...prevState.shoeItem, [target.id]: target.value },
        }));

    onUpdateShoeDetails = async () => {
        this.setState({ isLoading: true });
        try {
            await CatalogApi.put(
                `/${this.state.shoeItem.id}`,
                this.state.shoeItem
            );
            this.props.history.goBack();
            this.setState({ isLoading: false });
        } catch (err) {
            console.error(err);
        }
    };

    onDiscardDetailsChanges = () => this.props.history.goBack();

    isUserInputValid = () => {
        console.log(this.state.shoeItem);
        return (
            validation.isValidCategory(this.state.shoeItem.category) &&
            validation.isValidImage(this.state.shoeItem.imageUrl) &&
            validation.isValidPrice(this.state.shoeItem.price) &&
            validation.isValidProductName(this.state.shoeItem.productName) &&
            validation.isValidSize(this.state.shoeItem.size)
        );
    };

    render() {
        return this.product ? (
            <>
                {this.state.isLoading ? (
                    <Spinner></Spinner>
                ) : (
                    <div className="center-shoe-details">
                        <div className="shoe-details-container">
                            <div className="image-details-page-container">
                                <img
                                    className="preview-img"
                                    src={this.state.shoeItem.imageUrl}
                                    alt="#"
                                ></img>
                            </div>
                            <ShoesForm
                                disable={!this.isUserInputValid()}
                                className="details-form-container"
                                item={this.state.shoeItem}
                                onInputChange={this.onInputChange}
                                onSaveChanges={this.onUpdateShoeDetails}
                                onDiscardChanges={this.onDiscardDetailsChanges}
                            ></ShoesForm>
                        </div>
                    </div>
                )}
            </>
        ) : (
            <NotFound></NotFound>
        );
    }
}
