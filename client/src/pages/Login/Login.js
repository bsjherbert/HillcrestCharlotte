import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography, Paper, Link } from '@material-ui/core';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import BlankLogo from '../../components/Logo/BlankLogo';

class Login extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message = 'Sorry, that email/password combination is not valid. Please try again.';
            break;
          case 500:
            message = 'Server error. Please try again later.';
            break;
          default:
            message = 'An unknown error occurred. Please try again later.';
        }

        this.setState({ error: message });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Paper style={{ padding: "2.5rem 20%", marginTop: "2em" }}>
        <div style={{ height: "5rem", width: "5rem", textAlign:"center" }}>
          <BlankLogo />
        </div>

        <Typography component="h1" variant="h4" color="secondary" style={{ paddingBottom: "2%" }}>
          MyHillcrest
        </Typography>
        {this.state.error &&
          <Typography component="span" variant="subtitle2" role="alert" color="error">
            {this.state.error}
          </Typography>
        }
        <LoginForm onSubmit={this.handleSubmit} />
        <Typography component="p" variant="subtitle1" color="textSecondary" style={{ paddingTop: "2%" }}>
          Don't have an account? <Link href="register" to='/register'>Click here to register.</Link>
        </Typography>
      </Paper>
    );
  }
}

export default Login;
