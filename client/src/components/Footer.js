import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Link, Button } from '@material-ui/core';
import { AppBar, Box, Typography } from '@material-ui/core';
import { CallRounded, RoomRounded } from '@material-ui/icons';

import HillcrestLogo from './Logo/HillcrestLogo';

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.text.secondary
  },
  appBar: {
    top: "2.5rem",
    bottom: 0,
    marginTop: "2.5rem",
    padding: "1.5% 0 0 0",
    borderTopStyle: "solid",
    borderTop: 10,
    borderTopColor: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    zIndex: 0
  },
  mission: {
    [theme.breakpoints.down('sm')]: {
      margin: "2rem"
    },
    textAlign: "justify-center"
  },
  copyright: {
    backgroundColor: theme.palette.primary.main
  },
  margin: {
    margin: theme.spacing(3),
    alignItems: "center"
  }
}))

function Footer() {
  const classes = useStyles();

  return(
    <>
      <AppBar component="footer" position="static" className={classes.appBar}>
        <Grid container alignItems="center" direction="column">
          <HillcrestLogo />
          <Grid item className={classes.text}>
            <h4>Mission Statement</h4>
            <p className={classes.mission}>Hillcrest Baptist Church exists to love and support people genuinely, share scripture faithfully and educate believers in service to Christ our Lord.</p>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" aria-label="Contact Us" title="Contact Us"
              className={classes.margin} color="secondary" startIcon={<CallRounded />}>
              <Link href="#" color="textPrimary" underline="none">
                Contact Us
              </Link>
            </Button>
            <Button variant="contained" size="large" aria-label="Find Us" title="Find Us"
              className={classes.margin} color="secondary" startIcon={<RoomRounded />}>
              <Link href="#" color="textPrimary" underline="none">
                Find Us
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Box className={classes.copyright}>
          <Typography variant="subtitle1" color="textSecondary">
              <p>8501 Bellhaven Boulevard, Charlotte, NC 28214 | 704.392.1406 | churchoffice@hillcrestcharlotte.com</p>
              <p>&copy; {new Date().getFullYear()} Hillcrest Baptist Church. All rights reserved.</p>
          </Typography>                
        </Box>  
      </AppBar>
    </>
  )
}

export default Footer;