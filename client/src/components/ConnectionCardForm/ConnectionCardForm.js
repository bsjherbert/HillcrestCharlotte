import React, { Component } from "react";
import PageContainer from "../PageContainer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  form: {
    borderBottomStyle: "solid",
    borderBottom: 8,
    borderBottomColor: theme.palette.default.main,
    position: "relative",
    top: "3vh",
    zIndex: 5
  }
});
class ConnectionCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <PageContainer>
        <form className={classes.form}>
          <div>
            <label>Today's Date</label>
            <input
              name="date"
              id="date"
              type="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Name(s)</label>
            <input
              name="name"
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              name="address"
              id="address"
              type="text"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Telephone</label>
            <input
              name="telephone"
              id="telephone"
              type="tel"
              value={this.state.telephone}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <p>Preferred Contact Method</p>
            <div>
              <label>Email</label>
              <input
                type="radio"
                value="email"
                checked={this.state.contactMethod === "email"}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Phone Call</label>
              <input
                type="radio"
                value="phone"
                checked={this.state.contactMethod === "phone"}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <p>What would you like to do?</p>
            <div>
              <label htmlFor="speakPastor">
                I'd like to speak to a Pastor:
              </label>
              <input
                name="speakPastor"
                id="speakPastor"
                type="checkbox"
                checked={this.state.speakPastor}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="moreInfo">
                I'd like more info about Hillcrest:
              </label>
              <input
                name="moreInfo"
                id="moreInfo"
                type="checkbox"
                checked={this.state.moreInfo}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="questions">
                I have questions about my relationship with God:
              </label>
              <input
                name="questions"
                id="questions"
                type="checkbox"
                checked={this.state.questions}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </form>
      </PageContainer>
    );
  }
}

ConnectionCardForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConnectionCardForm);
