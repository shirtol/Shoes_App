import React, { Component } from "react";
import ShoesForm from "../../components/ShoesForm/ShoesForm";
import "./ShoeDetails.css";
import { CatalogApi } from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";

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
        await CatalogApi.put(`/${this.state.shoeItem.id}`, this.state.shoeItem);
        this.props.history.goBack();
    };

    onDiscardDetailsChanges = () => this.props.history.goBack();

    render() {
        return (
            <>
                {this.state.isLoading ? (
                    <Spinner></Spinner>
                ) : (
                    <div className="center-shoe-details">
                        <div className="shoe-details-container">
                            <div>
                                <img
                                    className="preview-img"
                                    src={this.state.shoeItem.imageUrl}
                                    alt="#"
                                ></img>
                            </div>
                            <ShoesForm
                                item={this.state.shoeItem}
                                onInputChange={this.onInputChange}
                                onSaveChanges={this.onUpdateShoeDetails}
                                onDiscardChanges={this.onDiscardDetailsChanges}
                            ></ShoesForm>
                        </div>
                    </div>
                )}
            </>
        );
    }
}
