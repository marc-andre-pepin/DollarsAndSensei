import React from "react";

import {
    Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement
} from 'chart.js';

import "./currencyHistoryChart.css";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

class HistoryChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baseCurrencySymbol: this.props.baseCurrencySymbol, targetCurrencySymbol: this.props.targetCurrencySymbol
        }

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const {baseCurrencySymbol, targetCurrencySymbol} = this.state;

        this.getHistoricalRates(baseCurrencySymbol, targetCurrencySymbol);
    }

    getHistoricalRates = (base, quote) => {
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

        fetch(`https://api.frankfurter.app/${startDate}..${endDate}?from=${base}&to=${quote}`)
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    throw new Error(data.error);
                }
                const chartLabels = Object.keys(data.rates);
                const chartData = Object.values(data.rates).map(rate => rate[quote]);
                const chartLabel = `${base}/${quote}`;
                this.buildChart(chartLabels, chartData, chartLabel);
            })
            .catch(error => console.error(error.message));
    }

    buildChart = (labels, data, label) => {
        const chartRef = this.chartRef.current.getContext("2d");

        if (typeof this.chart !== "undefined") {
            this.chart.destroy();
        }

        this.chart = new Chart(this.chartRef.current.getContext("2d"), {
            type: 'line', data: {
                labels, datasets: [{
                    label: label, data, fill: false, tension: 0,
                }]
            }, options: {
                responsive: true,
            }
        })
    }

    render() {
        return (<React.Fragment>
                <canvas ref={this.chartRef}/>
            </React.Fragment>)
    }
}

export default HistoryChart;
