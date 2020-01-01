import React from 'react';
import { Link as ReactLink} from "react-router-dom";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import HillcrestLogo from '../Logo/HillcrestLogo'

const useStyles = makeStyles(theme => ({
  mainnav: {
    backgroundColor: theme.palette.background.default,
    padding: "1% 0",
    // [theme.breakpoints.down('sm')]: {
    //   direction: "column"
    // },
  },
}))

export default function MainNavTabs() {
  const classes = useStyles();

  return (
    <nav>
      <Grid container className={classes.mainnav}
          direction="row"
          justify="space-evenly"
          alignItems="center">
        <image style={{float: "left", maxHeight: "20%", maxWidth: "20%", padding: "0.5rem"}}>
          <ReactLink href="/" title="Hillcrest Charlotte | Home">
            <HillcrestLogo />
          </ReactLink>
        </image>
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
    </nav>
  );
}
