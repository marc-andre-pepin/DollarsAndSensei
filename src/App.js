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
        <Router basename="/DollarsAndSensei">
            <nav id="topnav" className="bg-light">
                {/*TODO add List and Convert links*/}
                <div className="d-flex">
                    <div className="p-2 flex-grow-1 ms-5">
                        <Link className="navbar-brand" to="/">Dollars and Sensei</Link>
                    </div>
                    <div className="p-2">
                        <Link className="navbar-brand" to="/">Compare</Link>
                    </div>
                    <div className="p-2 me-5">
                        <Link className="navbar-brand" to="/convert/USD/JPY">Convert</Link>
                    </div>
                </div>
            </nav>
            <div id="main-content" className="container col-md-3 col-sm-6 pt-2">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/convert/:baseCurrency/:targetCurrency" component={Convert}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <footer id="footer" className="bg-dark">
                <div className="d-flex justify-content-evenly">
                    <div>
                        <a className="text-light">Social</a>
                    </div>
                    <div>
                        <a className="text-light">Contact</a>
                    </div>

                </div>

            </footer>
        </Router>
    )
}

export default App;
