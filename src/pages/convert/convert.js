import React from "react";
import {withRouter} from "react-router-dom";

import {currencies, calcExchangeRate} from "../../data/currencyData";

import "./convert.css"

class Convert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baseCurrency: this.props.match.params.baseCurrency,
            targetCurrency: this.props.match.params.targetCurrency,
            baseCurrencyAmt: 1.00
        };

        this.handleBaseCurrencyChange = this.handleBaseCurrencyChange.bind(this);
        this.handleTargetCurrencyChange = this.handleTargetCurrencyChange.bind(this);
        this.handleBaseCurrencyAmtChange = this.handleBaseCurrencyAmtChange.bind(this);
        this.flipCurrency = this.flipCurrency.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.url !== prevProps.match.url) {
            this.setState({
                baseCurrency: this.props.match.params.baseCurrency,
                targetCurrency: this.props.match.params.targetCurrency
            })
        }
    }

    handleBaseCurrencyChange = (e) => {
        const newBaseCurrency = e.target.value;
        this.props.history.push(`/convert/${newBaseCurrency}/${this.state.targetCurrency}`)
        this.setState({baseCurrency: newBaseCurrency});
    }

    handleTargetCurrencyChange = (e) => {
        const newTargetCurrency = e.target.value;
        this.props.history.push(`/convert/${this.state.baseCurrency}/${newTargetCurrency}`)
        this.setState({targetCurrency: newTargetCurrency});
    }

    handleBaseCurrencyAmtChange = (e) => {
        this.setState({baseCurrencyAmt: e.target.value});
    }

    flipCurrency = () => {
        const newBaseCurrency = this.state.targetCurrency;
        const newTargetCurrency = this.state.baseCurrency;

        this.props.history.push(`/convert/${newBaseCurrency}/${newTargetCurrency}`);
        this.setState({baseCurrency: newBaseCurrency, targetCurrency: newTargetCurrency});
    }

    render() {
        return (
            <div>
                <div id="currencyOptions">
                    <div id="baseCurrencyOptions">
                        <input id="baseCurrencyAmt" type="number" step="0.01" min="0.00"
                               onChange={this.handleBaseCurrencyAmtChange} value={this.state.baseCurrencyAmt}/>
                        <select id="baseCurrency" onChange={this.handleBaseCurrencyChange}>
                            {
                                currencies.map((c) =>
                                    <option key={c.symbol} value={c.symbol}
                                            selected={c.symbol === this.state.baseCurrency}>
                                        {c.symbol} - {c.name}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    <div id="flipCurrencyDiv">
                        <span id="flipCurrencyBtn" onClick={this.flipCurrency}>↔</span>
                    </div>
                    <div id="targetCurrencyOptions">
                    <span
                        id="convertedAmt">{(this.state.baseCurrencyAmt * calcExchangeRate(this.state.baseCurrency, this.state.targetCurrency)).toFixed(6)}</span>
                        <select id="targetCurrency" onChange={this.handleTargetCurrencyChange}>
                            {
                                currencies.map((c) =>
                                    <option key={c.symbol} value={c.symbol}
                                            selected={c.symbol === this.state.targetCurrency}>
                                        {c.symbol} - {c.name}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div id="chart">
                    {/*TODO get from library/api data*/}
                    <img src="https://www.chartoasis.com/charts/usd-jpy-10-years-chart-desktop.png"/>
                </div>
            </div>
        )
    }
}

export default withRouter(Convert);
