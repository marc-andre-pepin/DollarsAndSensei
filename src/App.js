import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Home from "./pages/home/home";
import Convert from "./pages/convert/convert";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const NotFound = () => {
    return <h2>Not Found</h2>;
}

const App = () => {
    return (
        <Router basename="/dollarsandsensei">
            <nav id="topnav" className="bg-light">
                <div className="d-flex">
                    <div className="p-2 flex-grow-1 ms-5">
                        <Link className="navbar-brand" to="/">Dollars and Sensei</Link>
                    </div>
                    <div className="p-2">
                        <Link className="navbar-brand" to="/">Compare</Link>
                    </div>
                    <div className="p-2 me-5">
                        <Link className="navbar-brand" to="/convert/USD/GBP">Convert</Link>
                    </div>
                </div>
            </nav>
            <div id="main-content" className="container-fluid col-lg-8 col-md-4 col-sm-12 pt-2">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/convert/:baseCurrency/:targetCurrency" component={Convert}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <footer id="footer" className="bg-dark">
                <div className="d-flex justify-content-evenly">
                    <div>
                        <a href="https://github.com/marc-andre-pepin" target="_blank" className="text-light">GitHub</a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/marc-andré-pépin-2b1ba2107/" target="_blank"
                           className="text-light">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </Router>
    )
}

export default App;
