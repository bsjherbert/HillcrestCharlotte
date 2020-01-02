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
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </PageContainer>
    );
  }
}

ConnectionCardForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConnectionCardForm);
