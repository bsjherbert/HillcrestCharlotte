import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { Checkbox, Button, Radio, RadioGroup, TextField } from "@material-ui/core";
import { FormControl, FormControlLabel, FormGroup, FormLabel, FormHelperText } from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";

import API from "../../lib/API";
import Modal from "../Modals/ConformationModal";
// import usaStates from './usaStates';


const styles = theme => ({
  root: {
    display: "block",
    [theme.breakpoints.down('sm')]: {
      textAlign: "left",
    },
    [theme.breakpoints.up(800)]: {
      textAlign: "center",
    },
  },
  form: {
    textAlign: "center",
    position: "relative",
    top: "3vh",
    zIndex: 5
  },
  state: {
    width: "10vw",
    display: "inline-block",
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(3),
    }
  },
  city: {
    position: "relative"
  }
});

// const error = {
//   name: null
// };

class ConnectionCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCreated: Date.now(),
      name: null,
      street: "",
      other: "",
      city: "",
      state: "",
      zip: null,
      email: "",
      telephone: "",
      contactMethod: "",
      speakPastor: false,
      moreInfo: false,
      questions: false,
      status: false,
      // error: false,
      message: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if (event.target === undefined) {
      console.log(event);
      this.setState({ dateCreated: new Date(event) });
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
    console.log(this.state);
    e.preventDefault();

    // if(this.state.address.other != "" && (this.state.address.street === "" || this.state.address.city === "" || this.state.address.zip === "") ) {
    //   e.preventDefault()
    //   this.setState({ error: true })
    // }

    API.ConnectionCard.create({
      dateCreated: this.state.dateCreated,
      name: this.state.name,
      address: {
        street: this.state.street,
        other: this.state.other,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      },
      email: this.state.email,
      telephone: this.state.telephone,
      contactMethod: this.state.contactMethod,
      speakPastor: this.state.speakPastor,
      moreInfo: this.state.moreInfo,
      questions: this.state.questions,
      status: this.state.status,
      // error: false,
      message: this.state.message
    })
      .then(connCard => {
        console.log(connCard);
        this.setState({ status: true });
      })
      .catch(err => {
        console.log(err)
        this.setState({
          status: true,
          message: "There was an error submitting your connection card. Please try again later!"
        })
      });
  };

  // handleError = e => {
  //   if(error){
  //     switch(this.state.message) {
  //       case 'name': this.setState({message: "You must provide a full name."})
  //     }
  //   }
  //   return this.setState({error: false})
  // }

  render() {
    const { classes } = this.props;
    return (
      <FormControl component="form" onSubmit={this.handleSubmit} fullWidth style={classes.formControl}>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              name="dateCreated"
              id="field-date-picker"
              label="Date"
              value={this.state.dateCreated}
              onChange={this.handleInputChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            fullWidth required
            name="name"
            id="field-name"
            label="Name (First and Last)"
            placeholder="Ex: John Doe"
            value={this.state.name}
            onChange={this.handleInputChange}
          // error={this.handleError}
          // helperText={this.state.message}
          />
          <TextField
            fullWidth
            name="street"
            id="field-street"
            label="Street"
            type="address-line-1"
            placeholder="Ex: 8501 Bellhaven Blvd"
            value={this.state.street}
            onChange={this.handleInputChange}
          // error={this.handleError}
          />
          <TextField
            fullWidth
            name="other"
            id="field-other"
            label="Apt/PO Box/Suite/Other"
            type="address-line-2"
            placeholder="Ex: Apt 301, Suite 405, etc."
            value={this.state.other}
            onChange={this.handleInputChange}
            helperText="Optional"
          />
          <TextField fullWidth
            name="city"
            id="field-city"
            label="City"
            type="address-level2"
            placeholder="Ex: Charlotte"
            value={this.state.city}
            onChange={this.handleInputChange}
            className={classes.city}
          />
          <TextField fullWidth
            name="state"
            id="field-state"
            label="State"
            type="address-level1"
            placeholder="NC"
            value={this.state.state}
            onChange={this.handleInputChange}
            className={classes.state}
          />
          <TextField fullWidth
            name="zip"
            id="field-zip"
            label="Zip Code"
            type="address-level1"
            placeholder="28214"
            value={this.state.zip}
            onChange={this.handleInputChange}
          />
          <TextField
            fullWidth required
            name="email"
            id="field-email"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          // error={this.handleError}
          />
          <TextField
            fullWidth required
            name="telephone"
            id="field-telephone"
            label="Phone Number"
            type="tel"
            value={this.state.telephone}
            onChange={this.handleInputChange}
          // error={this.handleError}
          />

          <FormControl component="fieldset" style={{ marginTop: "2rem", justifyContent: "center" }} required>
            <FormLabel component="legend" style={{ paddingBottom: "2%", fontWeight: "bolder" }}>Preferred Contact Method:</FormLabel>
            <RadioGroup
              aria-label="preferred contact method"
              name="contactMethod"
              value={this.state.contactMethod}
              onChange={this.handleInputChange}
              row style={{ justifyContent: "center", marginBottom: "1rem" }}
            >
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
              <FormControlLabel
                value="both"
                control={<Radio color="primary" />}
                label="Either"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          <FormControl required component="fieldset">
            <FormLabel component="legend" style={{ paddingBottom: "2%", fontWeight: "bolder" }}>What would you like to do?</FormLabel>
            <FormGroup aria-label="options" className={classes.root}>
              <FormControlLabel
                value="speakPastor"
                control={
                  <Checkbox
                    color="primary"
                    checked={this.state.speakPastor}
                    onChange={this.handleInputChange}
                    name="speakPastor"
                  />
                }
                label="I would like to speak to a pastor."
                aria-label="I would like to speak to a pastor."
                labelPlacement="end"
              />
              <FormControlLabel
                value="moreInfo"
                control={
                  <Checkbox
                    color="primary"
                    checked={this.state.moreInfo}
                    onChange={this.handleInputChange}
                    name="moreInfo"
                  />
                }
                label="I would like more info about Hillcrest."
                aria-label="I would like more info about Hillcrest."
                labelPlacement="end"
              />
              <FormControlLabel
                value="questions"
                control={
                  <Checkbox
                    color="primary"
                    checked={this.state.questions}
                    onChange={this.handleInputChange}
                    name="questions"
                  />
                }
                label="I have questions about my relationship with God."
                aria-label="I have questions about my relationship with God."
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </div>

        {/* Connection card submit button */}
        <Button
          onClick={e => this.handleSubmit(e)}
          type="submit"
          variant="contained"
          style={{ margin: "5%", padding: "3% 0" }}
          color="secondary"
          size="large"
          aria-label="submit connection card"
          startIcon={<SendRounded style={{ fontSize: "inherit", position: "relative", bottom: "1px" }} />}
        >
          Submit
        </Button>

        <Modal opened={this.state.status} />
      </FormControl>
    );
  }
}

ConnectionCardForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ConnectionCardForm);
