import React, { Component } from 'react';
import { FormControl, TextField, InputAdornment, Button } from '@material-ui/core';
import { EmailRounded, VpnKeyRounded, CreateRounded, AccountBoxRounded } from '@material-ui/icons';

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { firstName, lastName, email, password, passwordConfirm } = this.state;

    this.props.onSubmit(firstName, lastName, email, password, passwordConfirm);
    event.preventDefault();
  }

  render() {
    const { firstName, lastName, email, password, passwordConfirm } = this.state;

    return (
      <FormControl component="form" onSubmit={this.handleSubmit} fullWidth autoComplete="off" style={{ padding: "1rem 0" }}>
        <div>

          {/* First Name field */}
          <TextField required autoFocus label="First Name" placeholder="John"
            margin="normal" fullWidth aria-label="First Name field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxRounded fontSize="inherit" color="action" />
                </InputAdornment>
              )
            }} onChange={this.handleInputChange}
            name="firstName" type="input" value={firstName}
          />
          {/* Last Name field */}
          <TextField required label="Last Name" placeholder="Doe"
            margin="normal" fullWidth aria-label="Last Name field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              )
            }} onChange={this.handleInputChange}
            name="lastName" type="input" value={lastName}
          />
          {/* Email field */}
          <TextField required label="Email address" placeholder="johndoe@website.com"
            margin="normal" fullWidth aria-label="Email address field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRounded fontSize="inherit" color="action" />
                </InputAdornment>
              )
            }} onChange={this.handleInputChange}
            name="email" type="email" value={email}
          />

          {/* Password field */}
          <TextField required label="Password" placeholder="Create a password"
            margin="normal" fullWidth aria-label="password field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyRounded fontSize="inherit" color="action" />
                </InputAdornment>
              )
            }} onChange={this.handleInputChange}
            name="password" type="password" value={password}
          />

          {/* Password confirmation field */}
          <TextField required label="Confirm Password" placeholder="Type your password again"
            margin="normal" fullWidth aria-label="password confirmation field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              )
            }} onChange={this.handleInputChange}
            name="passwordConfirm" type="password" value={passwordConfirm}
          />
        </div>

        <Button type='submit' variant="contained" style={{ marginTop: "1rem", padding: "3% 0" }}
          color="secondary" size="large" aria-label="submit registration"
          startIcon={<CreateRounded style={{ fontSize: "inherit", position: "relative", bottom: "1px" }} />}>
          Register
        </Button>

      </FormControl>
    )
  }
}

export default RegistrationForm;
