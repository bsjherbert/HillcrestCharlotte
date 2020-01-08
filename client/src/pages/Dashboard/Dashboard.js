import React, { Component } from 'react';
import { Typography, Link } from '@material-ui/core';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import HCBudgetPie from '../../components/Charts/Pie';
import { labels, maxAmounts, sectionColors, hoverColors } from '../../components/Charts/Pie/testData';

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
          return this.setState({ error: 
            <Typography component="h1" variant="h3" color="textSecondary">
              "Unauthorized. Please <Link color="primary" href="login">login</Link>."
            </Typography>
         });
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
                  <h1>Welcome back!</h1>
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
