import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CircularProgress } from '@material-ui/core';
import { Typography, Link, Box, Paper } from '@material-ui/core';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import HCBudgetPie from '../../components/Charts/Pie';
import { labels, maxAmounts, sectionColors, hoverColors } from '../../components/Charts/Pie/testData';
import HillcrestTheme from '../../components/App/theme';

const styles = () => ({
  root: {
    display: 'flex',
    '& > * + *': {
      paddingLeft: "30vw",
      paddingRight: "30vw"
    },
    backgroundColor: HillcrestTheme.palette.background.paper,
    position: "relative",
    zIndex: 5
  }
})

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
          return this.setState({
            error:
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
    const { classes } = this.props;

    return (
      <main>
        {this.state.isLoading
          ? (
            <Box component="body" className={classes.root} textAlign="center" alignContent="center">
              <Typography component="h1" variant="h3" style={{ color: "rgb(0, 160, 0)", marginTop: "3rem" }}>
                Loading... <CircularProgress size="large" color="secondary" />
              </Typography>
            </Box>
          )
          : this.state.error
            ? (
              <span style={{ marginTop: "3rem" }}>
                {this.state.error}
              </span>
            )
            : (
              <Paper style={{ padding: "3vw", marginTop: "1rem" }}>
                  <Typography component="header" variant="h4" color="textSecondary">
                    Welcome back!
                  </Typography>

                <HCBudgetPie
                  labels={labels}
                  data={data}
                  backgroundColor={backgroundColor}
                  hoverBackgroundColor={hoverBackgroundColor} />
              </Paper>
            )
        }
      </main>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
