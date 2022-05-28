import React, { Component } from "react";
import { CatalogApi } from "../../api/api";
import AddItemBtn from "../../components/AddItemBtn/AddItemBtn";
import AddItemPopup from "../../components/AddItemPopup/AddItemPopup";
import DeleteItemPopup from "../../components/DeleteItemPopup/DeleteItemPopup";
import Shoe from "../../components/Shoe/Shoe";
import Spinner from "../../components/Spinner/Spinner";
import "./Catalog.css";

export default class Catalog extends Component {
    state = {
        shoesCatalog: [],
        isAddItemPopupOpen: false,
        isDeleteItemPopupOpen: false,
        selectedItemToDelete: null,
        isLoading: true,
    };

    async componentDidMount() {
        try {
            const { data } = await CatalogApi.get("/");
            this.setState({ shoesCatalog: data, isLoading: false });
        } catch (err) {
            console.error(err);
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

    onSubmitNewShoesClick = async (newShoes) => {
        this.setState({ isLoading: true });
        try {
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
                isLoading: false,
            }));
        } catch (err) {
            console.error(err);
        }
    };

    onCancelAddingClick = () => {
        this.setState({ isAddItemPopupOpen: false });
    };

    onDeleteClicked = (id) => {
        this.setState({
            isDeleteItemPopupOpen: true,
            selectedItemToDelete: id,
        });
    };

    onCancelDeleteClick = () => {
        this.setState({ isDeleteItemPopupOpen: false });
    };

    onApproveDeleteClick = async () => {
        this.setState({ isLoading: true });
        const filteredShoesArr = this.state.shoesCatalog.filter(
            (shoe) => shoe.id !== this.state.selectedItemToDelete
        );
        try {
            await CatalogApi.delete(`/${this.state.selectedItemToDelete}`);
            this.setState({
                shoesCatalog: filteredShoesArr,
                isDeleteItemPopupOpen: false,
                isLoading: false,
            });
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <div className="center">
                <AddItemPopup
                    isShown={this.state.isAddItemPopupOpen}
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
                {this.state.isLoading ? (
                    <Spinner></Spinner>
                ) : (
                    <div className="catalog-container">
                        {this.displayShoes()}
                    </div>
                )}
                <AddItemBtn onAddClicked={this.onAddClicked}></AddItemBtn>
            </div>
        );
    }
}
