import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

class Main extends Component{
  render() {
    return (
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">

                </div>
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </HashRouter>
    );
  }
}

export default Main;
