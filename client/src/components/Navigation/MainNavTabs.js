import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import HillcrestLogo from '../Logo/HillcrestLogo';

const useStyles = makeStyles(theme => ({
  mainnav: {
    backgroundColor: theme.palette.background.default,
    padding: "1% 0"
  },
}))

export default function MainNavTabs() {
  const classes = useStyles();

  return (
    <Grid container component="nav"
        className={classes.mainnav}
        direction="row"
        justify="space-evenly"
        alignItems="center">
      <HillcrestLogo/>
      <Grid item component="span">
        <Link href="#" underline="none" color="textSecondary" variant="h6"
        title="I'm New" onClick={event => event.target.preventDefault()}>
          I'm New
        </Link>
      </Grid>
      <Grid item component="span">
        <Link href="#" underline="none" color="textSecondary" variant="h6"
        title="Next Steps" onClick={event => event.target.preventDefault()}>
          Next Steps
        </Link>
      </Grid>
      <Grid item component="span">
        <Link href="#" underline="none" color="textSecondary" variant="h6"
        title="Learn" onClick={event => event.target.preventDefault()}>
          Learn
        </Link>
      </Grid>
      <Grid item component="span">
        <Link href="#" underline="none" color="textSecondary" variant="h6"
        title="Listen" onClick={event => event.target.preventDefault()}>
          Listen
        </Link>
      </Grid>
    </Grid>
  );
}
