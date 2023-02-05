import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from "react-chartjs-2";

import "./currencyComparisonChart.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

class ConversionChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baseCurrencySymbol: this.props.baseCurrencySymbol,
            targetCurrencySymbol: this.props.targetCurrencySymbol,
            targetCurrencyValue: this.props.targetCurrencyValue
        }

        this.getChartData = this.getChartData.bind(this);
    }

    getChartData = () => {
        return {
            labels: [`${this.state.baseCurrencySymbol}`, `${this.state.targetCurrencySymbol}`],
            datasets: [
                {
                    label: `Relative value to ${this.state.baseCurrencySymbol}`,
                    data: [1.00, 1.00 / this.state.targetCurrencyValue],
                    backgroundColor: [
                        'rgba(0, 0, 200, 0.6)',
                        'rgba(50, 50, 50, 0.6)'
                    ],
                    borderWidth: 1
                }
            ]
        }
    }

    render() {
        return (
            <div className="chartDiv">
                <Bar data={this.getChartData()}
                     options={{
                         plugins: {
                             title: {
                                 display: true,
                                 text: `${this.state.baseCurrencySymbol} vs ${this.state.targetCurrencySymbol}`
                             },
                             legend: {
                                 display: false
                             }
                         }
                     }}
                />
            </div>
        )
    }
}

export default ConversionChart;
