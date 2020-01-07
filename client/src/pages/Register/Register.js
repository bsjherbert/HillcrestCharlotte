import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography, Paper, Link, Divider } from '@material-ui/core';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import BlankLogo from '../../components/Logo/BlankLogo';

class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (firstName, lastName, email, password) => {
    API.Users.create(firstName, lastName, email, password)
      .then(response => {
        console.log(response)
        this.setState({ redirectToReferrer: true })
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "Sorry, that email/password combination is not valid. Please try again." });
        }
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Paper style={{ padding: "2.5rem 15%", marginTop: "2em" }}>
        <div style={{ maxHeight: "200px", maxWidth:"150px", margin: "0 42% 3% 42%", display:"table", alignItems: "center"}}>
          <BlankLogo />
        </div>

        <Typography component="h1" variant="h4" color="secondary" style={{ paddingBottom: "2%" }}>
          MyHillcrest
        </Typography>
        <Divider />
        <Typography component="p" variant="subtitle1" color="textSecondary" style={{ paddingTop: "2%", fontWeight: "bolder"}}>
          REGISTER
        </Typography>

        {this.state.error &&
          <Typography component="span" variant="subtitle2" role="alert" color="error">
            {this.state.error}
          </Typography>
        }
        <RegistrationForm onSubmit={this.handleSubmit} />
        <Typography component="p" variant="subtitle1" color="textSecondary">
          Already have an account? <Link href="login" to='/login'>Login!</Link>
        </Typography>

      </Paper>
    );
  }
}

export default Register;
