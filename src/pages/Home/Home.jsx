import React, { Component } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="home-page-container">
                <img
                    className="home-page-image"
                    src={require("../../assets/images/home-page.png")}
                    alt="bg"
                />
                <div className="home-page-text-container">
                    <h2 className="website-logo">ShirShuz</h2>
                    <h4 className="website-description">
                        Our collection offers the best and most unique shoes
                        available. <br /> We hope you will find your perfect
                        match
                    </h4>
                    <Link
                        to={{ pathname: `/shoes-catalog` }}
                        className="catalog-link"
                    >
                        <Button
                            className="home-page-btn"
                            buttonText="Explore"
                            onBtnClick={this.props.onStartExploring}
                        ></Button>
                    </Link>
                </div>
            </div>
        );
    }
}
