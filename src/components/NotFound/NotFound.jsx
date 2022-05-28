import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-page-container">
            <h1 className="not-found-msg">404 Not Found</h1>
            <img
                className="not-found-image"
                alt="404"
                src={require("../../assets/images/404.png")}
            ></img>
            <Link to="/" className="not-found-link">
                <Button buttonText="Go to home page"></Button>
            </Link>
        </div>
    );
};

export default NotFound;
