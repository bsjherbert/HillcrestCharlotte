import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

export default () => (
  <Paper style={{ padding: "2rem" }}>
    <Typography component="h1" variant="h2" color="textSecondary">
      Error 404
    </Typography>
    <Typography component="h3" variant="h4" color="error">
      Oh no!
    </Typography>
    <Typography component="p" color="error">
      Sorry, the page you requested cannot be found. {""}
      <RouterLink to="/">
        <Typography component="span" variant="p" color="textSecondary">
          Return home
        </Typography>
      </RouterLink>
      . Please contact us if you encounter this page multiple times, unexpectedly.
    </Typography>
  </Paper>
);
