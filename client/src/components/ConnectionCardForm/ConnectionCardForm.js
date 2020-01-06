import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import API from "../../lib/API";
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  form: {
    textAlign: "center",
    position: "relative",
    top: "3vh",
    zIndex: 5,
    border: "2px solid black"
  },

  input: {
    color: "black"
  }
});
class ConnectionCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCreated: Date.now(),
      name: "",
      address: "",
      email: "",
      telephone: "",
      contactMethod: "",
      speakPastor: false,
      moreInfo: false,
      questions: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if (event.target === undefined) {
      console.log(event)
      this.setState ({dateCreated: new Date(event)})
    } else {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
    console.log(this.state);
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    API.ConnectionCard.create(this.state)
      .then(connCard => console.log(connCard))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="form-group">
        <form className={classes.form}>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker InputProps={{ className: classes.input }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                name="dateCreated"
                id="date-picker-inline"
                label="Date"
                value={this.state.dateCreated}
                onChange={this.handleInputChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div>
            <TextField
              name="name"
              id="standard-name"
              label="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <TextField
              name="address"
              id="standard-address"
              label="Address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <TextField
              name="email"
              id="standard-email"
              label="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <TextField
              name="telephone"
              id="standard-telephone"
              label="Phone Number"
              value={this.state.telephone}
              onChange={this.handleInputChange}
            />
          </div>
          <div style={{marginTop: "2em"}} >
            <FormControl component="fieldset">
              <FormLabel component="legend">Preferred Contact Method</FormLabel>
              <RadioGroup aria-label="position" name="contactMethod" value={this.state.contactMethod} onChange={this.handleInputChange} row>
               
                <FormControlLabel
                  value="email"
                  control={<Radio color="primary" />}
                  label="Email"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="phone"
                  control={<Radio color="primary" />}
                  label="Phone"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{marginTop: "2em"}} >
            <FormControl component="fieldset">
      <FormLabel component="legend">What would you like to do?</FormLabel>
      <FormGroup aria-label="position">
        <FormControlLabel
          value="speakPastor"
          control={<Checkbox color="primary" checked={this.state.speakPastor} onChange={this.handleInputChange} name="speakPastor" />}
          label="I'd like to speak to a pastor"
          labelPlacement="end"
        />
        <FormControlLabel
          value="moreInfo"
          control={<Checkbox color="primary" checked={this.state.moreInfo} onChange={this.handleInputChange} name="moreInfo" />}
          label="I'd like more info about Hillcrest"
          labelPlacement="end"
        />
        <FormControlLabel
          value="questions"
          control={<Checkbox color="primary" checked={this.state.questions} onChange={this.handleInputChange} name="questions" />}
          label="I have questions about my relationship with God"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
          </div>
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
          {/* Button, Button needs to call function that is coded at top. Console log the state */}
        </form>
      </div>
    );
  }
}

ConnectionCardForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConnectionCardForm);
