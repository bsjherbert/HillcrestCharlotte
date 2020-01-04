import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import Chart from 'chart.js'

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';


const dataChart = () => {
  
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  }); 

return myChart
}
class Secret extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: "",
    secrets: []
  }


  componentDidMount() {
    dataChart()
    API.Secrets.getAll(this.context.authToken)
      .then(response => response.data)
      .then(secrets => {
        this.setState({ secrets })
       
      
      })
      .catch(err => {
        // if (err.response.status === 401) {
        //   return this.setState({ error: "Unauthorized. Please login." });
        // }

        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div className='Secret'>
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div>
                  <p>Shh, the secret is...</p>
                  <canvas id="myChart" width="400" height="400"></canvas>
                
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
