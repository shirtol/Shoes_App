import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shoes-catalog">Catalog</NavLink>
                </li>
            </header>
        );
    }
}
