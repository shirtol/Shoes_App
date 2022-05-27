import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import ShoeDetails from "../ShoeDetails/ShoeDetails";
import "./Routes.css";

const Routes = () => {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <div className="page-container">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route
                        exact
                        path="/shoes-catalog"
                        component={Catalog}
                    ></Route>
                    <Route
                        exact
                        path="/shoes-catalog/:id"
                        render={(props) => (
                            <ShoeDetails {...props}></ShoeDetails>
                        )}
                    ></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Routes;
