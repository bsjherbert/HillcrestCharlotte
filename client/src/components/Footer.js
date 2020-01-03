import React from 'react';
// import { Link as ReactLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { Grid, Link, Button, IconButton } from '@material-ui/core';
import { AppBar, Box, Typography } from '@material-ui/core';
import { CallRounded, Facebook, Twitter } from '@material-ui/icons';

import HillcrestLogo from './Logo/HillcrestLogo';
import Background from './App/connected.png';

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
    backgroundImage: `url(${Background})`,
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
  },
  facebook: {
    color: "rgb(59, 89, 152)"
  },
  twitter: {
    color: "rgb(0, 172, 237)"
  }
}))

function Footer() {
  const classes = useStyles();

  return(
    <>
      <AppBar component="footer" position="static" className={classes.appBar}>
        <Grid container alignItems="center" direction="column">
          <span style={{ maxHeight: "18%", maxWidth: "18%"}}>
            <HillcrestLogo />
          </span>
          <Grid item className={classes.text}>
            <h4>Mission Statement</h4>
            <p className={classes.mission}>Hillcrest Baptist Church exists to love and support people genuinely,<br /> share scripture faithfully and educate believers in service to Christ our Lord.</p>
          </Grid>
          <Grid item>
            <IconButton title="Hillcrest Facebook" aria-label="Hillcrest CLT Facebook" href="http://facebook.com/hillcrestclt" target="_blank" rel="noopener noreferrer">
              <Facebook className={classes.facebook} fontSize="large" />
            </IconButton>
            <IconButton title="Hillcrest Twitter" aria-label="Hillcrest CLT Twitter" href="http://twitter.com/hillcrestclt" target="_blank" rel="noopener noreferrer">
                <Twitter className={classes.twitter} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" aria-label="Contact Us" title="Contact Us"
              className={classes.margin} color="secondary" startIcon={<CallRounded />}>
              <Link href="#" color="textPrimary" underline="none">
                Contact Us
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