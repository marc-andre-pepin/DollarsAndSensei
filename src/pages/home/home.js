import React from "react";
import {Link, withRouter} from "react-router-dom";

import {currencies, calcExchangeRate} from "../../data/currencyData";

import "./home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baseCurrency: "USD"
        };

        this.handleBaseCurrencyChange = this.handleBaseCurrencyChange.bind(this);
    }

    handleBaseCurrencyChange = (e) => {
        this.setState({baseCurrency: e.target.value});
    }

    render() {
        return (
            <div>
                <div className="text-center pb-2">
                    <label>Compare to:</label>
                    <select id="baseCurrency" defaultValue="USD" onChange={this.handleBaseCurrencyChange}>
                        {
                            currencies.map((c) =>
                                <option key={c.symbol} value={c.symbol}>{c.symbol} - {c.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <table id="currencyTable" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Symbol</th>
                                <th>1.00 {this.state.baseCurrency}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currencies.map((c) =>
                                    <tr key={c.symbol}>
                                        <td>
                                            <Link to={`/convert/${this.state.baseCurrency}/${c.symbol}`}>{c.name}</Link>
                                        </td>
                                        <td>{c.symbol}</td>
                                        <td>{calcExchangeRate(this.state.baseCurrency, c.symbol).toFixed(6)}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default withRouter(Home);
