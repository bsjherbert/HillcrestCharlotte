import React, { Component } from 'react';
import Chart from 'chart.js';

class HCBudgetPie extends Component {
  pieRef = React.createRef();

  componentDidMount() {
    const myPieRef = this.pieRef.current.getContext('2d');
    const { labels, maxAmounts, sectionColors, hoverColors } = this.props;
    new Chart(myPieRef, {
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
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "2020 Budget",
          fontSize: 14
        },
        legend: {
          display: true,
          position: "left",
          labels: "Amount in USD"
        }
      }
    });
  }

  render() {
    return (
      <div className="chart-container" style={{ position: "relative", zIndex: 5, height: "25vh", width: "30vw" }}>
        <canvas id="budgetPie" ref={this.pieRef} />
      </div>
    );
  }
}

export default HCBudgetPie;