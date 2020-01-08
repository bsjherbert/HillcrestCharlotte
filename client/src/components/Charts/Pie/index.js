import React, { Component } from 'react';
import Chart from 'chart.js';
import { labels, maxAmounts, sectionColors, hoverColors } from './testData.js'

class HCBudgetPie extends Component {
  pieRef = React.createRef();

  componentDidMount() {
    // const myPieRef = this.pieRef.current;
    // const { labels, maxAmounts, sectionColors, hoverColors } = this.state;
    new Chart(document.getElementById('myChart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: "Budgeted Amount (USD)",
          data: maxAmounts,
          backgroundColor: sectionColors,
          hoverBackgroundColor: hoverColors,
          borderColor: "whitesmoke",
          borderWidth: 1,
          borderAlign: "inner"
        }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "2020 Budget (USD)",
          fontSize: 14
        },
        legend: {
          display: true,
          position: "left",
        }
      }
    });

  }
  // ref={this.pieRef}
  render() {
    return (
      <div className="chart-container" style={{ position: "relative", zIndex: 5, height: "200px", width: "300px" }}>
        <canvas id="myChart" />
      </div>
    );
  }
}

export default HCBudgetPie;