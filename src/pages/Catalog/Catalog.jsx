import React, { Component } from "react";
import { CatalogApi } from "../../api/api";
import AddItemBtn from "../../components/AddItemBtn/AddItemBtn";
import AddItemPopup from "../../components/AddItemPopup/AddItemPopup";
import DeleteItemPopup from "../../components/DeleteItemPopup/DeleteItemPopup";
import Shoe from "../../components/Shoe/Shoe";
import "./Catalog.css";

export default class Catalog extends Component {
    state = {
        shoesCatalog: [],
        isAddItemPopupOpen: false,
        isDeleteItemPopupOpen: false,
        newShoesName: "",
        newShoesPrice: "",
        newShoesSize: "",
        newShoesImage: "",
        newShoesDescription: "",
        newShoesCategory: "",
        selectedItemToDelete: null,
    };

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
                onDeleteIconClicked={this.onDeleteClicked}
                id={shoe.id}
            ></Shoe>
        ));
    };

    onAddClicked = () => {
        this.setState((prevState) => ({
            isAddItemPopupOpen: !prevState.isAddItemPopupOpen,
        }));
    };

    onInputChange = ({ target }) =>
        this.setState({ [target.id]: target.value });

    onSubmitNewShoesClick = async () => {
        const newShoes = {
            productName: this.state.newShoesName,
            price: this.state.newShoesPrice,
            category: this.state.newShoesCategory,
            description: this.state.newShoesDescription,
            size: this.state.newShoesSize,
            imageUrl: this.state.newShoesImage,
        };
        const { data } = await CatalogApi.post("/", newShoes);
        this.setState((prevState) => ({
            shoesCatalog: [...prevState.shoesCatalog, data],
            isAddItemPopupOpen: false,
            newShoesName: "",
            newShoesPrice: "",
            newShoesSize: "",
            newShoesImage: "",
            newShoesDescription: "",
            newShoesCategory: "",
        }));
    };

    onCancelAddingClick = () => {
        this.setState({ isAddItemPopupOpen: false });
    };

    onDeleteClicked = () => {
        this.setState({ isDeleteItemPopupOpen: true });
    };

    onCancelDeleteClick = () => {
        this.setState({ isDeleteItemPopupOpen: false });
    };

    onApproveDeleteClick = async (id) => {
        this.setState({ selectedItemToDelete: id });
        const filteredShoesArr = this.state.shoesCatalog.filter(
            (shoe) => shoe.id !== id
        );
        console.log(filteredShoesArr);
        await CatalogApi.delete(`/${id}`);
        this.setState({ shoesCatalog: filteredShoesArr });
    };

    render() {
        return (
            <div className="center">
                <AddItemPopup
                    isShown={this.state.isAddItemPopupOpen}
                    productName={this.state.newShoesName}
                    category={this.state.newShoesCategory}
                    size={this.state.newShoesSize}
                    price={this.state.newShoesPrice}
                    imageUrl={this.state.newShoesImage}
                    description={this.state.newShoesDescription}
                    onInputChange={this.onInputChange}
                    onAddClicked={this.onSubmitNewShoesClick}
                    onCancelClicked={this.onCancelAddingClick}
                ></AddItemPopup>
                <DeleteItemPopup
                    isShown={this.state.isDeleteItemPopupOpen}
                    onCancelClicked={this.onCancelDeleteClick}
                    onApproveClicked={this.onApproveDeleteClick}
                    id={this.state.selectedItemToDelete}
                ></DeleteItemPopup>
                <div className="catalog-container">{this.displayShoes()}</div>;
                <AddItemBtn onAddClicked={this.onAddClicked}></AddItemBtn>
            </div>
        );
    }
}
