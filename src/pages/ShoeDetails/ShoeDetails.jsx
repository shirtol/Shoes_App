import React, { Component } from "react";
import UpdateItemDetails from "../../components/UpdateItemDetails/UpdateItemDetails";
import "./ShoeDetails.css";
import { CatalogApi } from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";

export default class ShoeDetails extends Component {
    product = this.props.location.item;

    state = { shoeItem: this.product, isLoading: true };

    // state = {
    //     shoesName: this.props.location.item.productName,
    //     shoesPrice: this.props.location.item.price,
    //     shoesSize: this.props.location.item.size,
    //     shoesImage: this.props.location.item.imageUrl,
    //     shoesDescription: this.props.location.item.description,
    //     shoesCategory: this.props.location.item.category,
    // };

    componentDidMount = async () => {
        if (this.props.location.item === undefined) {
            const id = this.props.location.pathname.split("/")[2];
            const { data } = await CatalogApi.get(`/${id}`);
            this.setState({ shoeItem: data, isLoading: false });
        }
        this.setState({ isLoading: false });
    };

    onInputChange = ({ target }) =>
        this.setState({ [target.id]: target.value }, () =>
            console.log(this.state[target.id])
        );

    render() {
        console.log(this.props.location);
        console.log("hiii");
        return (
            <>
                {this.state.isLoading ? (
                    <Spinner></Spinner>
                ) : (
                    <div className="center-shoe-details">
                        <div className="shoe-details-container">
                            <UpdateItemDetails
                                productName={this.state.shoeItem.productName}
                                category={this.state.shoeItem.category}
                                size={this.state.shoeItem.size}
                                price={this.state.shoeItem.price}
                                imageUrl={this.state.shoeItem.imageUrl}
                                description={this.state.shoeItem.description}
                                onInputChange={this.onInputChange}
                            ></UpdateItemDetails>
                            <div>
                                <img
                                    src={this.state.shoeItem.imageUrl}
                                    alt="#"
                                ></img>
                                <h2>{this.state.shoeItem.productName}</h2>
                                <h4>{this.state.shoeItem.category}</h4>
                                <h4>{this.state.shoeItem.size}</h4>
                                <h5>{this.state.shoeItem.price}</h5>
                                <p>{this.state.shoeItem.description}</p>
                                <button>Back</button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}
