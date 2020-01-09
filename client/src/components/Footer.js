import React from 'react';
// import { Link as ReactLink} from "react-router-dom";
import { makeStyles, Link } from '@material-ui/core';
import { Grid, IconButton } from '@material-ui/core';
import { AppBar, Box, Typography } from '@material-ui/core';
import { Facebook, Twitter } from '@material-ui/icons';

import HillcrestLogo from './Logo/HillcrestLogo';
import Background from './App/connected.png';

const useStyles = makeStyles(theme => ({
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
      margin: "0.5rem"
    },
    textAlign: "justify-center",
    padding: "1em 0",
    color: theme.palette.text.secondary
  },
  copyright: {
    backgroundColor: theme.palette.primary.main,
    padding: "1em"
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
          <span style={{ maxHeight: "20%", maxWidth: "20%"}}>
            <HillcrestLogo />
          </span>
          <Grid item className={classes.mission} aria-label="Mission Statement">
            <Typography component="h3" variant="h6">
              Mission Statement
            </Typography>
            <Typography component="p">
              Hillcrest Baptist Church exists to love and support people genuinely,<br /> share scripture faithfully and educate believers in service to Christ our Lord.
            </Typography>
          </Grid>
          <Grid item style={{paddingBottom: "10px"}}>
            <IconButton title="Hillcrest Facebook" aria-label="Hillcrest CLT Facebook" href="http://facebook.com/hillcrestclt" target="_blank" rel="noopener noreferrer">
              <Facebook className={classes.facebook} fontSize="large" />
            </IconButton>
            <IconButton title="Hillcrest Twitter" aria-label="Hillcrest CLT Twitter" href="http://twitter.com/hillcrestclt" target="_blank" rel="noopener noreferrer">
                <Twitter className={classes.twitter} fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Box className={classes.copyright}>
          <Typography component="address" variant="subtitle1" color="textSecondary" style={{marginBottom: "0.5em"}}>
              <Link href="https://goo.gl/maps/kKdwxTSpeuYeNhbQ9" color="inherit" variant="inherit" underline="hover" style={{cursor: "pointer"}} target="_blank" rel="noopener">8501 Bellhaven Boulevard, Charlotte, NC 28214</Link> <br /> 
              <Link href="tel:17043921406" color="inherit" variant="inherit" underline="hover" style={{cursor: "pointer"}}>704.392.1406</Link> | 
              <Link href="mailto:churchoffice@hillcrestcharlotte.com?subject=New%20Mail%20from%20Hillcrest%20CLT%20Website" color="inherit" variant="inherit" underline="hover" style={{cursor: "pointer"}}> churchoffice@hillcrestcharlotte.com</Link>
          </Typography>
          <Typography component="p" variant="subtitle2" color="textSecondary">
              &copy; {new Date().getFullYear()} Hillcrest Baptist Church. All rights reserved.
          </Typography>               
        </Box>  
      </AppBar>
    </>
  )
}

export default Footer;