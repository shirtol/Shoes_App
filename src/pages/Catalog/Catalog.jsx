import React, { Component } from "react";
import { CatalogApi } from "../../api/api";
import Shoe from "../../components/Shoe/Shoe";
import "./Catalog.css";

export default class Catalog extends Component {
    state = { shoesCatalog: [] };

    async componentDidMount() {
        try {
            const { data } = await CatalogApi.get("/");
            this.setState({ shoesCatalog: data });
        } catch (err) {
            console.log(err);
        }
    }

    displayShoes = () => {
        return this.state.shoesCatalog.map((shoe) => (
            <Shoe
                key={shoe.productName + shoe.price + shoe.imageUrl}
                catalogLocation={this.props.location.pathname}
                item={shoe}
            ></Shoe>
        ));
    };

    render() {
        return (
            <div className="center">
                <div className="catalog-container">{this.displayShoes()}</div>;
            </div>
        );
    }
}
