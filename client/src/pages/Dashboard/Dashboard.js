import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import HCBudgetPie from '../../components/Charts/Pie';
import { labels, maxAmounts, sectionColors, hoverColors } from '../../components/Charts/testData';

class Dashboard extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: "",
    secrets: [],
    labels: labels,
    data: maxAmounts,
    backgroundColor: sectionColors,
    hoverBackgroundColor: hoverColors
  }

  componentDidMount() {
    API.Secrets.getAll(this.context.authToken)
      .then(response => response.data)
      .then(secrets => this.setState({ secrets }))
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { labels, data, backgroundColor, hoverBackgroundColor } = this.state;

    return (
      <main>
        {this.state.isLoading
          ? <div color="success">Loading...</div>
          : this.state.error
            ? <div color="error">{this.state.error}</div>
            : (
              <div>
                <header>
                  <h1>Welcome!</h1>
                  <h2>TESTING TESTING 123</h2>
                </header>
                <HCBudgetPie 
                  labels={labels}
                  data={data}
                  backgroundColor={backgroundColor}
                  hoverBackgroundColor={hoverBackgroundColor} />
              </div>
            )
        }
      </main>
    );
  }
}

export default Dashboard;
