import React, { Component } from "react";
import ConnectionCardForm from "../../components/ConnectionCardForm/ConnectionCardForm";
import { Typography, Paper, Divider } from "@material-ui/core";
import BlankLogo from "../../components/Logo/BlankLogo";

class ConnectionCard extends Component {
  render() {
    return (
      <Paper style={{ padding: "2.5rem 15%", marginTop: "2em" }}>
        <div
          style={{
            maxHeight: "200px",
            maxWidth: "150px",
            margin: "0 42% 3% 42%",
            display: "table",
            alignItems: "center"
          }}
        >
          <BlankLogo />
        </div>

        <Typography
          component="h1"
          variant="h4"
          color="secondary"
          style={{ paddingBottom: "2%" }}
        >
          Connection Card
        </Typography>
        <Divider />
        <Typography
          component="p"
          variant="subtitle1"
          color="textSecondary"
          style={{ paddingTop: "2%", fontWeight: "bolder" }}
        ></Typography>

        <div>
          <ConnectionCardForm />
        </div>
      </Paper>
    );
  }
}

export default ConnectionCard;
