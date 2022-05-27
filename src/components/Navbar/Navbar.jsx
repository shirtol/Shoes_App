import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="routes-container">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shoes-catalog">Catalog</NavLink>
                    </li>
                </div>
                {/* <li>
                    <i
                        className="fa-solid fa-circle-plus"
                        onClick={this.props.onAddClicked}
                    ></i>
                </li> */}
            </header>
        );
    }
}
