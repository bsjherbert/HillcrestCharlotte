import React from 'react';
import { Link as ReactLink} from "react-router-dom";
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HillcrestLogo from '../Logo/HillcrestLogo'

const useStyles = makeStyles(theme => ({
  mainnav: {
    backgroundColor: theme.palette.background.default,
    padding: "1% 0",
    [theme.breakpoints.down('sm')]: {
      direction: "column"
    }
  },
  tabs: {
    padding: "2%"
  }
}))

export default function MainNavTabs() {
  const classes = useStyles();

  return (
    <nav>
      <Grid container className={classes.mainnav}
      disableGutters
          direction="row"
          justify="space-around"
          alignItems="center">
        <span style={{float: "left", maxHeight: "20%", maxWidth: "20%", padding: "0.5rem"}}>
          <ReactLink href="/" to="/" title="Hillcrest Charlotte | Home">
            <HillcrestLogo />
          </ReactLink>
        </span>
        <Grid item component="span" className={classes.tabs}>
          <Link href="#" underline="none" color="textSecondary" variant="h6"
          title="I'm New" onClick={event => event.target.preventDefault()}>
            I'm New
          </Link>
        </Grid>
        <Grid item component="span" className={classes.tabs}>
          <Link href="#" underline="none" color="textSecondary" variant="h6"
          title="Next Steps" onClick={event => event.target.preventDefault()}>
            Next Steps
          </Link>
        </Grid>
        <Grid item component="span" className={classes.tabs}>
          <Link href="#" underline="none" color="textSecondary" variant="h6"
          title="Learn" onClick={event => event.target.preventDefault()}>
            Learn
          </Link>
        </Grid>
        <Grid item component="span" className={classes.tabs}>
          <Link href="#" underline="none" color="textSecondary" variant="h6"
          title="Listen" onClick={event => event.target.preventDefault()}>
            Listen
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
}
