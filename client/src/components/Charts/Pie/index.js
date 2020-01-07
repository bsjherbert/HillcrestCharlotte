import React, { Component } from 'react';
import Chart from 'chart.js';
// import { labels, maxAmounts, sectionColors, hoverColors } from './testData.js'

class HCBudgetPie extends Component {
  pieRef = React.createRef();

  componentDidMount() {
    // const myPieRef = this.pieRef.current;
    // const { labels, maxAmounts, sectionColors, hoverColors } = this.state;
    new Chart(document.getElementById('myChart'), {
      type: 'pie',
      data: {
        labels: ['Events', 'Maintenance', 'Mission Trips', 'Hillcrest Kids'],
        datasets: [{
          label: "Budgeted Amount (USD)",
          data: [10000, 20000, 11000, 5000],
          backgroundColor: [
            'rgb(8, 53, 108)',
            'rgb(223, 202, 151)',
            'rgb(205, 74, 40)',
            '#736757'
          ],
          hoverBackgroundColor: [
            'rgba(0, 15, 64, 1)',
            'rgba(172, 154, 105, 1)',
            'rgba(149, 20, 0, 1)',
            '#473d2e'
          ],
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
    // new Chart(myPieRef, {
    //   type: 'pie',
    //   data: {
    //     labels: ['Events', 'Maintenance', 'Mission Trips', 'Hillcrest Kids'],
    //     datasets: [{
    //       label: "Budgeted Amount (USD)",
    //       data: [10000, 20000, 11000, 5000],
    //       backgroundColor: [
    //         'rgb(8, 53, 108)',
    //         'rgb(223, 202, 151)',
    //         'rgb(205, 74, 40)',
    //         '#736757'
    //       ],
    //       hoverBackgroundColor: [
    //         'rgba(0, 15, 64, 1)',
    //         'rgba(172, 154, 105, 1)',
    //         'rgba(149, 20, 0, 1)',
    //         '#473d2e'
    //       ]
    //       // ,
    //       // borderColor: "whitesmoke",
    //       // borderWidth: 1,
    //       // borderAlign: "inner"
    //     }
    //   ]
    //   },
    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //       text: "2020 Budget",
    //       fontSize: 14
    //     },
    //     legend: {
    //       display: true,
    //       position: "left",
    //       labels: "Amount in USD"
    //     }
    //   }
    // });


  }
  // ref={this.pieRef}
  render() {
    return (
      <div className="chart-container" style={{ position: "relative", zIndex: 5, height: "200px", width: "300px" }}>
        <canvas id="myChart"  />
      </div>
    );
  }
}

export default HCBudgetPie;