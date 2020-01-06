import React, { Component } from 'react';
import { FormControl, TextField, InputAdornment, Button } from '@material-ui/core';
import { EmailRounded, VpnKeyRounded, LockOpenRounded } from '@material-ui/icons';


class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <FormControl component="form" onSubmit={this.handleSubmit} fullWidth>
        {/* Email field */}
        <TextField required autoFocus label="Email address" placeholder="johndoe@website.com"
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
        <TextField required label="Password" placeholder="Enter your password"
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

        <Button type='submit' variant="contained" style={{ margin: "5%", padding: "3% 0"}}
          color="secondary" size="large" aria-label="submit log in"
          startIcon={<LockOpenRounded style={{fontSize: "inherit", position: "relative", bottom: "1px"}} />}>
          Login
        </Button>
      </FormControl>
    )
  }
}

export default LoginForm;

